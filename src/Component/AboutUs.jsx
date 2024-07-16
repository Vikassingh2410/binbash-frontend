import React from "react";
import { GoSun } from "react-icons/go";
import NavBar from "./NavBar";
import { RiBatteryChargeFill } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";


const AboutUs = () => {
    return (
        <>
            <div className="relative bg-black w-full h-screen text-white p-16">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent "> </div>
                <NavBar />
                <div className="p-12"></div>
                <h1 className="font-semibold text-3xl mb-8">About Us.</h1>
                <p className="text-xl w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos dolorem excepturi error eligendi corrupti neque quam voluptate perspiciatis maiores voluptatem minima saepe nesciunt iure voluptatum, recusandae doloribus voluptas sequi numquam veniam obcaecati adipisci facilis impedit earum? Perspiciatis, corrupti ad? Incidunt debitis possimus nam asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem eveniet velit blanditiis repellendus porro dolore magnam.</p>
                <div className="flex justify-center items-center mt-20 animate-slide-in gap-12 ">
                    <div className="text-7xl border-r ">
                        <GoSun />
                        <h4 className="text-xl mt-8">Energy Saving</h4>
                        <p className="text-base mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est vitae recusandae quas vel eligendi quam mollitia eum iure veniam?</p>
                    </div>

                    <div className="text-7xl border-r">
                        <RiBatteryChargeFill />
                        <h4 className="text-xl mt-8">Smart technology</h4>
                        <p className="text-base mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est vitae recusandae quas vel eligendi quam mollitia eum iure veniam?</p>
                    </div>


                    <div className="text-7xl border-r ">
                        <MdOutlineEnergySavingsLeaf />
                        <h4 className="text-xl mt-8">EcoSystem</h4>
                        <p className="text-base mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est vitae recusandae quas vel eligendi quam mollitia eum iure veniam?</p>
                    </div>


                    <div className="text-7xl">
                        <AiFillCustomerService />
                        <h4 className="text-xl mt-8">Customer Support</h4>
                        <p className="text-base mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est vitae recusandae quas vel eligendi quam mollitia eum iure veniam?</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs;