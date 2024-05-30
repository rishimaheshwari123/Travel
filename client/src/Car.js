import ac from './air-conditioner.png';
import seat from './car-seat.png';
import bag from './travel-luggage.png';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Cars = () => {
    const [cabs, setCabs] = useState([]);
    const [tabActive, setTabActive] = useState("innovacrysta");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/admin/get"
                );
                console.log(response.data.cabs);
                setCabs(response.data.cabs);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleTabChange = (tab) => {
        setTabActive(tab);
    };

    return (
        <div id="car-container" className="mt-[87px] w-11/12 mx-auto">
            <video
                src="https://videos.pexels.com/video-files/2053855/2053855-uhd_3840_2160_30fps.mp4"
                autoPlay
                controls
                loop
                muted
                className="w-screen h-auto rounded-[4rem] my-5"
            ></video>
            <center><h1 className="h1">Explore The Types Of Cab We Offer</h1></center>
            <div className="flex flex-col" id="cars">
                <div id="carhead" className="flex items-center justify-center sm:flex flex-wrap">
                    {cabs.map(car => (
                        <button
                            key={car.vName}
                            onClick={() => handleTabChange(car.vName)}
                            className={`font-bold text-xl p-2 m-2 rounded ${tabActive === car.vName ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        >
                            {car.vName}
                        </button>
                    ))}
                </div>
                {cabs.map(car => (
                    tabActive === car.vName && (
                        <div key={car._id} className="carbox">
                            <div>
                                <img className="cartab" src={car.image} alt={car.label} />
                            </div>
                            <div className="info">
                                <h1>{car.title}</h1>
                                <p>{car.desc}</p>
                                {car.features && (
                                    <div className="features">
                                        <img src={ac} alt="AC" /> <span>AC</span>
                                        <img src={seat} alt="Seats" /> <span>{car.features.seats}</span>
                                        <img src={bag} alt="Bags" /> <span>{car.features.bags}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default Cars;
