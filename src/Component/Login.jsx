import React from "react";

const Login = () => {
    return (
        <>
            <div className="bg-black w-full h-screen flex justify-start items-center">
                <div className="bg-white w-1/2 h-screen flex justify-center items-start p-16 text-black">
                    <div className="mx-3 flex justify-center items-center gap-2">
                        <img className="h-12 rounded-full" src="https://t4.ftcdn.net/jpg/03/22/70/65/360_F_322706505_RoJ120AZEtWlj8i5gpGdNHUByiSR0zlI.jpg" alt="Logo" />
                        <a href="/" className="text-lg font-bold">Vikas Singh</a>
                    </div>
                    <div className="flex flex-row">
                        <h1>Hi there !</h1>
                    </div>
                </div>
                <div className="bg-black w-1/2 h-screen"></div>

            </div>
        </>
    )
}

export default Login;