import React, { useState, useEffect, useRef } from "react";
import Chat from './Chat';
import Journey from './Journey';
import Nav from './Nav';
import { Card } from 'flowbite-react';
import { useLocation } from "react-router-dom";
import axios from "axios";


const Content = () => {


    const requestJson = {
        "_id": { "$oid": "65e6564cc2342fca9b217e78" },
        "login": "elena.thompson@gmail.com",
        "poi": [
            { "type": "NightLife", "geometry": { "type": "Point", "coordinates": [{ "$numberDouble": "2.3678" }, { "$numberDouble": "48.8673" }] }, "properties": { "brand": "La Bellevilloise", "wikidata": "", "name": "La Bellevilloise", "nightlife": "nightclub" }, "description": "A cultural hotspot in the 20th arrondissement, La Bellevilloise features a concert hall, club space, and a rooftop garden, hosting a variety of live music events and DJ sets." }, { "type": "NightLife", "geometry": { "type": "Point", "coordinates": [{ "$numberDouble": "2.3486" }, { "$numberDouble": "48.853" }] }, "properties": { "brand": "Le Caveau de la Huchette", "wikidata": "", "name": "Le Caveau de la Huchette", "nightlife": "jazz club" }, "description": "A historic jazz club in the Latin Quarter, Le Caveau de la Huchette offers a trip back in time with its live swing and jazz music, in a cavernous, medieval cellar." }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [{ "$numberDouble": "2.3333" }, { "$numberDouble": "48.8606" }] }, "properties": { "brand": "Louvre Museum", "wikidata": "Q19675", "brand:wikipedia": "en:Louvre", "name": "Louvre Museum", "tourism": "museum" }, "description": "Home to thousands of works of art, including the Mona Lisa and the Venus de Milo, the Louvre Museum is not only the world's largest art museum but also a historic monument in Paris." }],
        "hotels": [{ "type": "Hotel", "geometry": { "type": "Point", "coordinates": [{ "$numberDouble": "2.3572" }, { "$numberDouble": "48.8707" }] }, "properties": { "name": "9Hotel Republique", "category": "Best Quality-Price", "rating": { "$numberInt": "4" } }, "description": "9Hotel Republique features sleek, contemporary design and comfortable rooms, located just a stone's throw from Place de la République." }, { "type": "Hotel", "geometry": { "type": "Point", "coordinates": [{ "$numberDouble": "2.3209" }, { "$numberDouble": "48.8638" }] }, "properties": { "name": "Four Seasons Hotel George V", "category": "Famous", "rating": { "$numberInt": "5" } }, "description": "Just steps from the Champs-Elysées, this hotel is famed for its Michelin-starred restaurants and exquisite floral arrangements." }, { "type": "Hotel", "geometry": { "type": "Point", "coordinates": [{ "$numberDouble": "2.3069" }, { "$numberDouble": "48.8707" }] }, "properties": { "name": "Mandarin Oriental, Paris", "category": "Famous", "rating": { "$numberInt": "5" } }, "description": "Located on the fashionable Rue Saint-Honoré, the hotel boasts a serene spa, a lush courtyard garden, and stylish rooms." }],
        "flights": [{ "_id": { "$oid": "65e6532855031585a892f171" }, "type": "flight-offer", "id": "1", "source": "GDS", "instantTicketingRequired": false, "nonHomogeneous": false, "oneWay": false, "lastTicketingDate": "2024-03-05", "lastTicketingDateTime": "2024-03-05", "numberOfBookableSeats": { "$numberInt": "9" }, "itineraries": [{ "duration": "PT1H50M", "segments": [{ "departure": { "iataCode": "DUB", "terminal": "2", "at": "2024-04-04T18:30:00" }, "arrival": { "iataCode": "CDG", "terminal": "1", "at": "2024-04-04T21:20:00" }, "carrierCode": "EI", "number": "528", "aircraft": { "code": "320" }, "operating": { "carrierCode": "EI" }, "duration": "PT1H50M", "id": "3", "numberOfStops": { "$numberInt": "0" }, "blacklistedInEU": false }] }], "price": { "currency": "EUR", "total": "165.28", "base": "88.00", "fees": [{ "amount": "0.00", "type": "SUPPLIER" }, { "amount": "0.00", "type": "TICKETING" }], "grandTotal": "165.28" }, "pricingOptions": { "fareType": ["PUBLISHED"], "includedCheckedBagsOnly": true }, "validatingAirlineCodes": ["EI"], "travelerPricings": [{ "travelerId": "1", "fareOption": "STANDARD", "travelerType": "ADULT", "price": { "currency": "EUR", "total": "82.64", "base": "44.00" }, "fareDetailsBySegment": [{ "segmentId": "3", "cabin": "ECONOMY", "fareBasis": "AOW13GDS", "class": "A", "includedCheckedBags": { "weight": { "$numberInt": "20" }, "weightUnit": "KG" } }] }, { "travelerId": "2", "fareOption": "STANDARD", "travelerType": "ADULT", "price": { "currency": "EUR", "total": "82.64", "base": "44.00" }, "fareDetailsBySegment": [{ "segmentId": "3", "cabin": "ECONOMY", "fareBasis": "AOW13GDS", "class": "A", "includedCheckedBags": { "weight": { "$numberInt": "20" }, "weightUnit": "KG" } }] }], "params": { "originLocationCode": "DUB", "destinationLocationCode": "PAR", "departureDate": "2024-04-04", "adults": { "$numberInt": "2" }, "max": { "$numberInt": "3" } } }, { "_id": { "$oid": "65e652a7069db10ef0db7537" }, "type": "flight-offer", "id": "1", "source": "GDS", "instantTicketingRequired": false, "nonHomogeneous": false, "oneWay": false, "lastTicketingDate": "2024-03-05", "lastTicketingDateTime": "2024-03-05", "numberOfBookableSeats": { "$numberInt": "9" }, "itineraries": [{ "duration": "PT1H50M", "segments": [{ "departure": { "iataCode": "DUB", "terminal": "2", "at": "2024-04-04T18:30:00" }, "arrival": { "iataCode": "CDG", "terminal": "1", "at": "2024-04-04T21:20:00" }, "carrierCode": "EI", "number": "528", "aircraft": { "code": "320" }, "operating": { "carrierCode": "EI" }, "duration": "PT1H50M", "id": "3", "numberOfStops": { "$numberInt": "0" }, "blacklistedInEU": false }] }], "price": { "currency": "EUR", "total": "165.28", "base": "88.00", "fees": [{ "amount": "0.00", "type": "SUPPLIER" }, { "amount": "0.00", "type": "TICKETING" }], "grandTotal": "165.28" }, "pricingOptions": { "fareType": ["PUBLISHED"], "includedCheckedBagsOnly": true }, "validatingAirlineCodes": ["EI"], "travelerPricings": [{ "travelerId": "1", "fareOption": "STANDARD", "travelerType": "ADULT", "price": { "currency": "EUR", "total": "82.64", "base": "44.00" }, "fareDetailsBySegment": [{ "segmentId": "3", "cabin": "ECONOMY", "fareBasis": "AOW13GDS", "class": "A", "includedCheckedBags": { "weight": { "$numberInt": "20" }, "weightUnit": "KG" } }] }, { "travelerId": "2", "fareOption": "STANDARD", "travelerType": "ADULT", "price": { "currency": "EUR", "total": "82.64", "base": "44.00" }, "fareDetailsBySegment": [{ "segmentId": "3", "cabin": "ECONOMY", "fareBasis": "AOW13GDS", "class": "A", "includedCheckedBags": { "weight": { "$numberInt": "20" }, "weightUnit": "KG" } }] }], "params": { "originLocationCode": "DUB", "destinationLocationCode": "PAR", "departureDate": "2024-04-04", "adults": { "$numberInt": "2" }, "max": { "$numberInt": "3" } } }, { "_id": { "$oid": "65e652a7069db10ef0db7539" }, "type": "flight-offer", "id": "3", "source": "GDS", "instantTicketingRequired": false, "nonHomogeneous": false, "oneWay": false, "lastTicketingDate": "2024-03-05", "lastTicketingDateTime": "2024-03-05", "numberOfBookableSeats": { "$numberInt": "9" }, "itineraries": [{ "duration": "PT1H50M", "segments": [{ "departure": { "iataCode": "DUB", "terminal": "2", "at": "2024-04-04T13:30:00" }, "arrival": { "iataCode": "CDG", "terminal": "1", "at": "2024-04-04T16:20:00" }, "carrierCode": "EI", "number": "526", "aircraft": { "code": "320" }, "operating": { "carrierCode": "EI" }, "duration": "PT1H50M", "id": "2", "numberOfStops": { "$numberInt": "0" }, "blacklistedInEU": false }] }], "price": { "currency": "EUR", "total": "177.28", "base": "100.00", "fees": [{ "amount": "0.00", "type": "SUPPLIER" }, { "amount": "0.00", "type": "TICKETING" }], "grandTotal": "177.28" }, "pricingOptions": { "fareType": ["PUBLISHED"], "includedCheckedBagsOnly": true }, "validatingAirlineCodes": ["EI"], "travelerPricings": [{ "travelerId": "1", "fareOption": "STANDARD", "travelerType": "ADULT", "price": { "currency": "EUR", "total": "88.64", "base": "50.00" }, "fareDetailsBySegment": [{ "segmentId": "2", "cabin": "ECONOMY", "fareBasis": "GOW13GDS", "class": "G", "includedCheckedBags": { "weight": { "$numberInt": "20" }, "weightUnit": "KG" } }] }, { "travelerId": "2", "fareOption": "STANDARD", "travelerType": "ADULT", "price": { "currency": "EUR", "total": "88.64", "base": "50.00" }, "fareDetailsBySegment": [{ "segmentId": "2", "cabin": "ECONOMY", "fareBasis": "GOW13GDS", "class": "G", "includedCheckedBags": { "weight": { "$numberInt": "20" }, "weightUnit": "KG" } }] }], "params": { "originLocationCode": "DUB", "destinationLocationCode": "PAR", "departureDate": "2024-04-04", "adults": { "$numberInt": "2" }, "max": { "$numberInt": "3" } } }]
    }

    const { state } = useLocation();
    const [request, setRequest] = useState(requestJson);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(0);

    //console.log("CONTENT STATE", state);


    async function fetchData() {
        try {
            const { data } = await axios.get("https://eu-west-2.aws.data.mongodb-api.com/app/skypulse-ciagg/endpoint/request?login=" + state.user.email);
            console.log("CALLBACK RESPONSE ARRIVED TO DESTINATION");
            setRequest(data);
            console.log("NEW REQUEST", data);
            setStatus(2);
        } catch (err) {
            console.log(err);
        }
    }


    const selectFlight = (flight) => {
        setStatus(3);
    };

    const selectHotel = (hotel) => {
        setStatus(4);
    };

    const selectPoi = (poi) => {
        setStatus(5);
    };



    const handleMessageSubmit = async (e) => {
        e.preventDefault();

        console.log("MESSAGE SENT TO AI");

        setStatus(1);

        try {
            const result = await axios.post("http://ec2-35-180-97-3.eu-west-3.compute.amazonaws.com:5000/search", { query: message });

            if (result && result?.status === 200) {
                //scrollToBottom();
                fetchData();

            }
        } catch (err) {
            console.log("HANDLESUBMIT ERROR", err)
        }

    };

    return (
        <>
            <div className="min-h-full">
                <Nav {...state} />
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">SkyPulse Concierge</h1>
                    </div>
                </header>
                <main>
                    <div className="grid grid-flow-row-dense grid-cols-2 mx-auto">

                        {/** START CHAT */}
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">

                                {/** AI */ (status >= 0) &&
                                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img src="img/ai.webp" className="h-20 w-20 rounded-full" />
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">SkyPulse Concierge</h2>
                                            <p className="leading-relaxed text-base">I'm your dedicated AI concierge, here to help you create the journey for your next travel.</p>
                                        </div>
                                    </div>
                                }

                                {/** USER */ (status >= 1) &&
                                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 text-end">{state.user.name}</h2>
                                            <p className="leading-relaxed text-base text-end">{message}</p>
                                        </div>
                                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img
                                                className="h-20 w-20 rounded-full"
                                                src={state.user.picture}
                                            />
                                        </div>
                                    </div>
                                }

                                {/** AI  + Flight Recommendation */ (status >= 2) &&

                                    <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img src="img/ai.webp" className="h-20 w-20 rounded-full" />
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">SkyPulse Concierge</h2>
                                            <p className="leading-relaxed text-base">Here are the flights that I would recommend for your according to your history and post preferences:
                                            </p>
                                        </div>
                                    </div>}

                                {/** AI  + Flight Recommendation */ (status >= 2) &&
                                    <div className="flex items-center lg:w-5/5 mx-auto sm:flex-row flex-col px-6">
                                        <section className="text-gray-600 body-font">
                                            <div className="container px-5 py-10 mx-auto">
                                                <div className="flex flex-wrap -m-4">

                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=720&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-fon text-center">{request?.flights[0]?.itineraries[0]?.segments?.length + " Correspondance"}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Airfrance  Airways</h2>
                                                            <button
                                                                onClick={() => selectFlight(request?.flights[0])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><b>{request?.flights[0]?.price.total + " €"}</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=720&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{request?.flights[1]?.itineraries[0]?.segments?.length + " Correspondance"}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Dubai Airways</h2>
                                                            <button
                                                                onClick={() => selectFlight(request?.flights[1])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><b>{request?.flights[1]?.price.total + " €"}</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=720&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{request?.flights[2]?.itineraries[0]?.segments?.length + " Correspondance"}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Suiss Airways</h2>
                                                            <button
                                                                onClick={() => selectFlight(request?.flights[2])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded "><b>{request?.flights[1]?.price.total + " €"}</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>}

                                {/** AI  + Hotel Recommendation */ (status >= 3) &&

                                    <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img src="img/ai.webp" className="h-20 w-20 rounded-full" />
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">SkyPulse Concierge</h2>
                                            <p className="leading-relaxed text-base">These hotels will match well with your flight :
                                            </p>
                                        </div>
                                    </div>}

                                {/** AI  + Hotel Recommendation */ (status >= 3) &&
                                    <div className="flex items-center lg:w-5/5 mx-auto sm:flex-row flex-col px-6">
                                        <section className="text-gray-600 body-font">
                                            <div className="container px-5 py-10 mx-auto">
                                                <div className="flex flex-wrap -m-4">

                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded-full w-full h-20 object-cover object-center mb-6" src={request?.hotels[0]?.image || "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-fon text-center">{request?.hotels[0]?.type}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">{request?.hotels[0]?.properties?.name.substring(0, 17)}&hellip;</h2>
                                                            <button
                                                                onClick={() => selectHotel(request?.hotels[0])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><b>Book</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded-full w-full h-20 object-cover object-center mb-6" src={request?.hotels[1]?.image || "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{request?.hotels[1]?.type}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">{request?.hotels[1]?.properties?.name.substring(0, 17)}&hellip;</h2>
                                                            <button
                                                                onClick={() => selectHotel(request?.hotels[1])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><b>Book</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded-full w-full h-20 object-cover object-center mb-6" src={request?.hotels[2]?.image || "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{request?.hotels[2]?.type}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">{request?.hotels[2]?.properties?.name.substring(0, 17)}&hellip;</h2>
                                                            <button
                                                                onClick={() => selectHotel(request?.hotels[2])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded "><b>Book</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>}


                                {/** AI  + Hotel Recommendation */ (status >= 4) &&

                                    <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
                                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img src="img/ai.webp" className="h-20 w-20 rounded-full" />
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">SkyPulse Concierge</h2>
                                            <p className="leading-relaxed text-base">You will be able to visit the following point of interest :
                                            </p>
                                        </div>
                                    </div>}

                                {/** AI  + Hotel Recommendation */ (status >= 4) &&
                                    <div className="flex items-center lg:w-5/5 mx-auto sm:flex-row flex-col px-6">
                                        <section className="text-gray-600 body-font">
                                            <div className="container px-5 py-10 mx-auto">
                                                <div className="flex flex-wrap -m-4">

                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded-full w-full h-20 object-cover object-center mb-6" src={request?.poi[0]?.image || "https://images.unsplash.com/photo-1507666664345-c49223375e33?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-fon text-center">{request?.poi[0]?.type}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">{request?.poi[0]?.properties?.name.substring(0, 17)}&hellip;</h2>
                                                            <button
                                                                onClick={() => selectPoi(request?.poi[0])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><b>Book</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded-full w-full h-20 object-cover object-center mb-6" src={request?.poi[1]?.image || "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{request?.poi[1]?.type}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">{request?.poi[1]?.properties?.name.substring(0, 17)}&hellip;</h2>
                                                            <button
                                                                onClick={() => selectPoi(request?.poi[1])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><b>Book</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                                        <div className="bg-gray-100 p-6 rounded-lg">
                                                            <img className="h-30 rounded-full w-full h-20 object-cover object-center mb-6" src={request?.poi[2]?.image || "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="content" />
                                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{request?.poi[2]?.type}</h3>
                                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">{request?.poi[2]?.properties?.name.substring(0, 17)}&hellip;</h2>
                                                            <button
                                                                onClick={() => selectPoi(request?.poi[2])}
                                                                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded "><b>Book</b>
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>}

                                {/** Chat Bar */}
                                <div className="container px-5 py-12 mx-auto">
                                    <div className="lg:w-5/5 mx-auto px-6">
                                        <form onSubmit={handleMessageSubmit}>
                                            <label htmlFor="chat" className="sr-only">Your message</label>
                                            <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                                </button>
                                                <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                                                </button>

                                                <textarea id="chat" onChange={(e) => setMessage(e.target.value)}
                                                    rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

                                                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                                    <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                                </button>
                                            </div>
                                        </form>

                                        <p className="mt-3">You can have a chat with the AI to help you book your flight, find the right activities, places to visit and the best restaurants
                                        </p>
                                        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/** END CHAT */}


                        <div className='m-10'>
                            <Journey request={request} status={status} />
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
};

export default Content;
