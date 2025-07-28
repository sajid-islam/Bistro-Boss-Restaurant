import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useItemCart from "../../hooks/useItemCart";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import moment from "moment";

const CheckoutFrom = () => {
    const { user } = useAuth();
    const { cartItem } = useItemCart();
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();
    const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure
                .post("/create-payment-intent", { price: totalPrice })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            console.log("[Error]", error);
            setError(error.message);
        } else {
            console.log("[Payment method]", paymentMethod);
            setError("");
        }
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email,
                        name: user.displayName,
                    },
                },
            });
        if (confirmError) {
            console.log(error);
        } else {
            if (paymentIntent.status === "succeeded") {
                toast.success("payment success");
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transitionId: paymentIntent.id,
                    cartIds: cartItem.map((cart) => cart._id),
                    menuIds: cartItem.map((cart) => cart.foodId),
                    status: "pending",
                    date: moment().format("L"),
                };
                const res = await axiosSecure.post("/payments", payment);
                console.log(res.data);
            } else {
                toast.error("payment unsuccess");
            }
        }
    };

    return (
        <div className="mx-10">
            <form onSubmit={handleSubmit} className="form-control">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <p className="text-xs text-red-600 mt-7">{error}</p>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="btn bg-[#570DF8]"
                >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutFrom;
