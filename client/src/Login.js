import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "./redux/authSlice";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Loading",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: false,
            html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
        });
        try {
            const response = await axios.post(
                "http://localhost:8080/admin/login",
                formData
            );

            Swal.close();

            if (!response?.data?.success) {
                // Show error toast
                Swal.fire({
                    title: `Something went wrong, try again later`,
                    text: response?.data?.message || 'Login failed',
                    icon: "error",
                });
                return;
            }

            // Show success toast
            Swal.fire({
                title: `Login Successfully`,
                text: ``,
                icon: "success",
            });

            dispatch(setToken(response?.data.token));
            dispatch(setUser(response.data.user));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            navigate("/dashboard");
        } catch (error) {
            Swal.close();
            // Handle the case where there's a server error or network error
            Swal.fire({
                title: `Login Failure`,
                text: `Please Try Again`,
                icon: "error",
            });
            console.log(error);
        }
    };

    return (
        <body id="login">
            <div className="registerbox">
                <center>
                    <div className="screen__content">
                        <div className="container-register">
                            <div className="screen">
                                <form className="login" onSubmit={handleOnSubmit}>
                                    <h1 className="h1 heading">LOGIN FORM</h1>
                                    <div className="login__field">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleOnChange}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className="login__field">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            id="myInput"
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                    <br />
                                    <button
                                        id="btn"
                                        className="btn"
                                        type="submit"
                                    >
                                        Log In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </body>
    );
};

export default Login;
