import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import khanakazana from '../assets/khanakazana.png'
const Footer = () => {
    return (
        <footer className="bg-gray-200 border-t py-10">
            <div className="container mx-auto px-6">
                <div className="lg:flex lg:justify-between">
                    
                    {/* Left Section */}
                    <div className="lg:w-2/5">
                        <a href="#" className="flex items-center">
                            <img className="w-auto h-24" src={khanakazana} alt="KhannaKazana Logo" />
                            
                        </a>
                        <p className="mt-3 text-gray-600 text-sm">
                            Your go-to destination for delicious recipes and cooking inspiration.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-gray-500 hover:text-red-500 transition">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black transition">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="mt-8 lg:mt-0 lg:w-3/5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div>
                                <h3 className="text-gray-900 font-semibold uppercase">Recipes</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Breakfast</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Lunch</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Dinner</a>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-semibold uppercase">Categories</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Healthy</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Quick & Easy</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Desserts</a>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-semibold uppercase">Support</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">About Us</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Contact</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Privacy Policy</a>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-semibold uppercase">Stay Updated</h3>
                                <form className="mt-2">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="px-3 py-2 w-full rounded border border-gray-300 focus:ring-2 focus:ring-red-500"
                                    />
                                    <button className="mt-2 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t mt-8 pt-6 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} KhannaKazana. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
