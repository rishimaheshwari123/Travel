import React, { useState, useEffect } from "react";
import axios from "axios";

const Ourrates = () => {
    const [cabs, setCabs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/admin/get-rate"
                );
                console.log(response.data);
                if (response.data && response.data.rates) {
                    setCabs(response.data.rates);
                } else {
                    console.error("Cabs data is undefined");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id='rates'>
            <center>
                <h1 className='h1'>Our Rates</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Car List</th>
                            <th>Seating</th>
                            <th>Rates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cabs && cabs.length > 0 ? (
                            cabs.map((currElem) => (
                                <tr key={currElem._id}>
                                    <td>{currElem.car}</td>
                                    <td>{currElem.seat}</td>
                                    <td>{currElem.rate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                <h2 className='h2'>Sedan Taxi (Innova, Etios, Swift)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Package</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8 hrs 80 Km</td>
                            <td>Local / Extra hours 100/- Extra Km 10/-</td>
                            <td> ₹1400</td>
                        </tr>
                        <tr>
                            <td>Full Day Out of Station</td>
                            <td>Full Day 10/- Per Included 250Km Running</td>
                            <td>₹2500</td>
                        </tr>
                        <tr>
                            <td>Pick & Drop</td>
                            <td>600/-</td>
                            <td>₹600</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2 className='h2'>SUV Taxi (Innova Crysta, Amaze, Breeza, Tavera)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Package</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Full Day Package</td>
                            <td>14 Per Km Included 250/- Running Night Allowance 250/-</td>
                            <td> ₹3500</td>
                        </tr>
                        <tr>
                            <td>14 Rs Per Hr/80Km</td>
                            <td>Extra Hours 150/- Extra Km 14/-</td>
                            <td>₹2000</td>
                        </tr>
                        <tr>
                            <td>Pick & Drop</td>
                            <td>1000/-</td>
                            <td>₹1000</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2 className='h2'>Traveller (17/32 Seater Traveller)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Package</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22Rs Per Km</td>
                            <td>Outstation Full Day Package Night Allowance 400/-</td>
                            <td> ₹5500</td>
                        </tr>
                        <tr>
                            <td>30Rs Per Km</td>
                            <td>Outstation and Local Full Day Package Night Allowance 500/-</td>
                            <td>₹7500</td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default Ourrates;
