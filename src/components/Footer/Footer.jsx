import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-2">
                <div className="bg-[#1F2937] text-white text-center p-10">
                    <h1 className="md:text-3xl">CONTACT US</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="my-1">+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] text-white text-center p-10">
                    <h1 className="md:text-3xl">FOLLOW US</h1>
                    <p className="mb-3">Join us on social media</p>
                    <div className="flex justify-center gap-5 text-xl">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-blue-500"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-pink-500"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="hover:text-blue-400"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white">
                <aside>
                    <p className="text-xs md:text-[14px]">
                        Copyright © 2024 - All right reserved by Bistro Boss
                        Restaurant
                    </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
