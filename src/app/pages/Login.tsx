import React from "react";

const Login = () => {

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">

                <div className="w-3/5 p-5 ">
                    <h1>Login</h1>
                </div>
                <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                    <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2">
                    </div>
                    <p className="mb-2">Fill up personal information and start journey with us</p>
                </div>

            </div>
        </div>
    )

}

export default Login;