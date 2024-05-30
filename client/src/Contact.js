import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './Contact.css'; // Import the CSS file for styles

const Contact = () => {
    const [input, setInput] = useState({ name: "", email: "", msg: "" });
    const myNav = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhost:4000/Contact";
        axios.post(url, input).then((res) => {
            alert("Message Successfully Submitted !!!");
            myNav("/home");
        });
    };

    return (
        <>
            <section className="footerr_get_touch_outer">
                <div className="container">
                    <div className="footerr_get_touch_inner">
                        <div className="get_form">
                            <div className="get_form_inner">
                                <div className="get_form_inner_text">
                                    <h1 className="h1 m-2">Connect with us!</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <i className='bx bxs-user'></i>
                                        <input className="msg" placeholder="Enter Name" type="text" name="name" value={input.name} onChange={handleInput} required />
                                    </div>
                                    <div className="form-group">
                                        <i className='bx bxl-gmail'></i>
                                        <input className="msg" placeholder="Enter Email" type="email" name="email" value={input.email} onChange={handleInput} required />
                                    </div>
                                    <div className="form-group">
                                        <i className='bx bxs-chat'></i>
                                        <textarea cols="30" rows="10" className="msg" placeholder="Enter Message" type="text" name="msg" value={input.msg} onChange={handleInput} required></textarea>
                                    </div>
                                    <div className="grid-full">
                                        <button className="submitbtn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="get_say_form">
                            <h5 className='h5 m-2'>Get in Touch</h5>
                            <ul className="get_say_info_sec">
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:singhsonu21887@gmail.com">Email: singhsonu21887@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-whatsapp"></i>
                                    <a href="tel:+919993186451">Contact: +91 99931 86451<br />+91 423 2450026</a>
                                </li>
                                <li>
                                    <i className="fa fa-skype"></i>
                                    <a href="#">Address: 71, Chhatrasal Nagar Phase-2, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041, India</a>
                                </li>
                            </ul>
                            <ul className="get_say_social-icn">
                                <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#"><i className="fa fa-globe"></i></a></li>
                                <li><a href="#"><i className="fa fa-phone"></i></a></li>
                                <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4619735791034!2d77.46113960000001!3d23.2626578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69fcecdc38ad%3A0xf4d757a800f01720!2sChhatrasal%20Nagar%20Phase-2%2C%20Bharat%20Nagar%2C%20Indrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1716295261955!5m2!1sen!2sin" width="100%" height="500px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
};

export default Contact;
