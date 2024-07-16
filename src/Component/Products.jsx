import React from "react";
import NavBar from "./NavBar";



const AboutUs = () => {
    return (
        <>
            <div className="relative bg-black w-full h-screen text-white p-16">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent "> </div>
                <NavBar />
                <div className="p-12 flex justify-center"></div>
                <h1 className="font-semibold text-2xl mb-8 text-center">Virtual Advisors</h1>
                <h1 className="font-semibold text-7xl mb-8 text-center">Your AI-Powered Team</h1>
                <p className="text-lg text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aut ullam quam nostrum qui non?</p>
                <div className="flex justify-center items-center mt-20 animate-slide-in gap-12 ">
                    <div className=" ">
                        <img className="h-auto w-72" src="https://www.globalts.com/images/easyblog_shared/October_2023/10-25-23/modernTechnology_620977929_400.jpg" alt="" />
                    </div>
                    <div className=" ">
                        <img className="h-auto w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBWg9kroNQcUHePjkfGtoIheDSWmfmKOnVQ&s" alt="" />
                    </div>
                    <div className=" ">
                        <img className="h-auto w-96" src="https://www.netscribes.com/wp-content/uploads/2022/09/technology-assessment-netscribes.jpg" alt="" />
                    </div>
                    <div className=" ">
                        <img className="h-auto w-96" src="https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F07%2FTechnology-Can-Boost-Your-Business-Productivity.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;