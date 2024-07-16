import React from "react";
import NavBar from "./NavBar";
import backgroundImage from "../assets/Backgroundimage.jpg";
import '../App.css'; // Import the combined CSS file

const Home = () => {
    return (
        <div className="relative h-[100vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${ backgroundImage })` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent">
                        <NavBar />
                        <div className="absolute bottom-24 right-40 p-32 w-full max-w-md bg-black bg-opacity-50 text-white animate-slide-in">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="absolute bottom-24 left-12 p-32 w-full max-w-md bg-black bg-opacity-50 text-white animate-slide-in">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="absolute bottom-24 left-1/3 p-32 w-full max-w-md bg-black bg-opacity-50 text-white animate-slide-in">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;