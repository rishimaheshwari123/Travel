import React from 'react'
import aboutbg from './Aboutbg.png'


const Aboutpage = () => {
    return (
        <>
            <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img src={aboutbg} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" id="aboutb" />
                <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
                <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-6l font-bold tracking-tight text-white sm:text-6xl">Welcome to Raghuveer Travels</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-300">Taxi cab service available for all India Local visit Airport station pickup drop Indore ujjain gwalior jabalpur etc cab service available.
                            <br />
                            A local taxi or car service  company that provides transportation services within the city and possibly to nearby destinations. These types of businesses typically offer various types of vehicles for hire, ranging from standard taxis to more luxurious options like sedans and SUVs. They might provide services such as airport transfers, city tours, outstation trips, and more.
                            To make planning your vacation easier, you can book a cab with ease on our website, or call us on our customer support number. If you'd like to discuss your itinerary with our executives in detail. When you book an outstation cab with us, we'll send you a travel kit and help you plan your itinerary. We also have a handy cab booking system that will further reduce the hassles of booking a trip with us. Our expert drivers will guide you through some of the best experiences India has to offer. From the time you make a booking with us, to the time you get back home, we'll make sure you have a great road trip
                        </p>
                    </div>
                    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        
                        <div class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Customer's Satisfaction</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">85%</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Taxi's</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">45+</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Rides</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">900+</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Drivers</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">50+</dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutpage;