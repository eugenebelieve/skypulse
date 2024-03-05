import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
  * user: {
                        "_id": "65e59d81ca508180dfed7884",
                        "name": "Elena Thompson",
                        "picture": "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHl8ZW58MHx8MHx8fDA%3D",
                        "email": "elena.thompson@gmail.com",
                        "settings": { "hobbies": ["photography", "hiking", "reading"], "foods": ["Italian", "Mexican", "Japanese"], "interests": ["history", "art galleries", "nature"] },
                        "roadInfo": { "family": { "single": true, "nbKids": 0 } },
                        "pastTravels": [{ "pastFlightInfos": { "departure": "London", "destination": "Rome", "date": "2023-05-15", "airline": "British Airways" } }, { "pastFlightInfos": { "departure": "New York", "destination": "Tokyo", "date": "2023-08-22", "airline": "Japan Airlines" } }]
                    }
 */

const Login = () => {
    const navigate = useNavigate();

    async function login(username) {
        try {
            const { data } = await axios.get("https://eu-west-2.aws.data.mongodb-api.com/app/skypulse-ciagg/endpoint/user?login=" + username);
            sendData(username, data);
        } catch (err) {
            console.log(err);
        }

    }

    async function sendData(username, data) {
        try {
            const result = await axios.post("https://eu-west-2.aws.data.mongodb-api.com/app/skypulse-ciagg/endpoint/request/create", { login: username });
            if (result && result?.status === 200) {
                //console.log("result ----> ", data)

                navigate("/home", {
                    state: {
                        user: data
                    }
                });
            } else {
                // Try again
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        login(e.currentTarget.elements.email.value);
    };

    return (
        <>
            <div className="h-screen font-sans bg-cover" style={{
                background: "url('https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>

                <div className="container mx-auto h-full flex flex-1 justify-center items-center">

                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl" onSubmit={handleLogin}>
                                <p className="text-black font-medium text-center text-2xl font-bold font-sans p-6">SKYPULSE LOGIN</p>

                                <div className="">
                                    <label className="block text-md text-black" htmlFor="email">E-mail</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-white-300 rounded focus:outline-none focus:bg-white" type="email" id="email" placeholder="Enter your e-mail" aria-label="email" required />
                                </div>
                                <div className="mt-2">
                                    <label className="block  text-md text-black">Password</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-white-300 rounded focus:outline-none focus:bg-white"
                                        type="password" id="password" placeholder="Enter your password" arial-label="password" required />
                                </div>

                                <div className="mt-4 items-center flex justify-between">
                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                        type="submit">Submit</button>
                                    <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-black hover:text-red-400"
                                        href="#">Forgot Password</a>
                                </div>
                                <div className="text-center pb-3 pt-6">
                                    <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400" href="#">
                                        Create an account
                                    </a>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
