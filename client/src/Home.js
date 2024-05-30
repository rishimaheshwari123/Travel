import React, { useState } from 'react';
import All from './All';
import Footer from './Footer';
import taxi from './taxibg.jpg';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import Aboutus from './Aboutus';
import Poster from './Poster';
import Cars from './Car';
import taxibg from './Carbg.png';
import cargif from './cargif.gif';

const Home = () => {
    const openCity = (cityName) => {
        setActiveTab(cityName);
    };    
    const [activeTab, setActiveTab] = useState('Innova Crista');

    const [input, setInput] = useState({ name: '', mobile: '', location: '', destination: '' });
    const [isLoading, setIsLoading] = useState(false);
    const myNav = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({ ...prevInput, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/demo', {
                method: 'POST',
                body: JSON.stringify(input),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.text();
            console.log(data);
            alert("Successfully Booked!!!");
            myNav("/home");
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    //         alert("Successfully Booked!!!");
    //         myNav("/home");
    //     } catch (error) {
    //         console.error('Error:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const posts = [
        {
            id: 1,
            href: '#',
            description: 'Great service, really flexible right up to the journey date and a lot cheaper than "airport shuttle" services. Marco was really helpful throughout.',
            date: 'Jan 16, 2023',
            datetime: '2023-01-16',
            category: { title: 'Review', href: '#' },
            author: {
                name: 'Xyz',
                role: 'Public',
                href: '#',
                imageUrl: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            },
        },
        {
            id: 2,
            href: '#',
            description: 'Excellent service. My driver was waiting at Arrivals for me with a clear sign. He was very polite and friendly and drove me with no delay',
            date: 'June 27, 2022',
            datetime: '2022-06-27',
            category: { title: 'Review', href: '#' },
            author: {
                name: 'Ritika Philip',
                role: 'Public',
                href: '#',
                imageUrl: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            },
        },
        {
            id: 3,
            href: '#',
            description: 'Fantastic service. Driver on time despite very very tricky hotel location. Would definitely recommend 100%',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Review', href: '#' },
            author: {
                name: 'Twinkle Solanki',
                role: 'Public',
                href: '#',
                imageUrl: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            },
        }
    ];

    return (
        <>
            <div className="home">
                <div id="home">
                    <div className="relative isolate px-8 lg:px-20" id='left'>
                        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100" aria-hidden="true"></div>
                        <div className="w-screen h-[90vh] py-8">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
                                <div className='py-10'>
                                    <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-black ring-1 ring-black-900/10 hover:ring-black-900/20">
                                            "Your Comfort, Our Priority".{' '}
                                            <a href="#" className="font-semibold text-black-600">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                Read more <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                                        Best Taxi Service In Bhopal <br />
                                    </h1>
                                    <span className="text-1-sm font-bold tracking-tight text-black sm:text-xm">- The Perfect Ride, Every Time</span>
                                    <p className="mt-6 text-lg leading-8 text-black"></p>
                                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                                        <a
                                            href="#form" id='booknowbtn'
                                            className="rounded-md bg-black-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                                        >
                                            Book Now
                                        </a>
                                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                            <span aria-hidden="true">Know More→</span>
                                        </a>
                                    </div>
                                    <div>
                                        <img src={taxibg} alt="Taxi Background" />
                                    </div>
                                </div>
                                <div className="bg-white mt-5 p-4 rounded-lg shadow-lg w-full lg:max-w-md" id='form'>
                                    <h2 className="text-xl font-bold mb-4">Book Your Ride</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={input.name}
                                                onChange={handleInput}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                                Mobile no
                                            </label>
                                            <input
                                                type="number"
                                                id="mobile"
                                                name="mobile"
                                                value={input.mobile}
                                                onChange={handleInput}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                                Pickup Location
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={input.location}
                                                onChange={handleInput}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                                                Destination Location
                                            </label>
                                            <input
                                                type="text"
                                                id="destination"
                                                name="destination"
                                                value={input.destination}
                                                onChange={handleInput}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-black-600 text-white py-2 px-4 rounded-md bg-yellow-500 shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                        >
                                            {isLoading ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Aboutus />
                <div id='brands'>
                    <div className="py-10 sm:py-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                                Trusted by the world’s most innovative teams
                            </h2>
                            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src="https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png"
                                    alt="Chevrolet"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src="https://www.carlogos.org/car-logos/honda-logo-2000-full-640.png"
                                    alt="Honda"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src="https://www.carlogos.org/logo/Suzuki-logo-640x425.jpg"
                                    alt="Suzuki"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                    src="https://www.carlogos.org/car-logos/toyota-logo-2005-640.png"
                                    alt="Toyota"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src="https://www.carlogos.org/logo/Force-Motors-logo-640x424.jpg"
                                    alt="Force Motors"
                                    width={158}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Cars />
                <br /><br />
                <Poster />
                <div className="bg-white py-24 sm:py-20" id='reviews'>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reviews</h2>
                        <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={post.author.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.author.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.author.role}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
