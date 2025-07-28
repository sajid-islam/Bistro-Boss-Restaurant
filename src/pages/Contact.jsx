import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover/Cover";
import contactBanner from "../assets/contact/banner.jpg";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const info = [
        {
            icon: <FaPhoneAlt size={24} className="mx-auto text-white" />,
            title: "PHONE",
            details: "+38 (012) 34 56 789",
        },
        {
            icon: <FaMapMarkerAlt size={24} className="mx-auto text-white" />,
            title: "ADDRESS",
            details: "+38 (012) 34 56 789",
        },
        {
            icon: <FaClock size={24} className="mx-auto text-white" />,
            title: "WORKING HOURS",
            details: (
                <>
                    <div>Mon - Fri: 08:00 - 22:00</div>
                    <div>Sat - Sun: 10:00 - 21:00</div>
                </>
            ),
        },
    ];
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover
                img={contactBanner}
                title={"contact us"}
                description={"Would you like to try a dish?"}
            />
            <SectionTitle subHeading={"visit us"} heading={"our location"} />
            <div className="w-full max-w-5xl mx-auto px-2 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {info.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded shadow overflow-hidden flex flex-col"
                        >
                            <div className="bg-[#d1a054] py-4 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="flex-1 p-6 text-center">
                                <div className="text-gray-700 font-semibold mb-2 tracking-wider">
                                    {item.title}
                                </div>
                                <div className="text-gray-600 text-sm">
                                    {item.details}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
