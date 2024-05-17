
const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-2">
                <div className="bg-[#1F2937] text-white text-center p-10">
                    <h1 className="text-3xl">CONTACT US</h1>
                </div> 
                <div className="bg-[#111827] text-white text-center p-10">
                    <h1 className="text-3xl">FOLLOW US</h1>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Bistro Boss Restaurant</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;