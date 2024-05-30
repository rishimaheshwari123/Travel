import React from 'react';
import collage from './taxibg.jpg';
import borderline from './borderline.png';

const Aboutus = () => {
  return (
    <div>
      <center>
        <h1 className='h1'>About Us</h1>
        <span>
          <img src={borderline} className="underline" alt="Underline decoration" />
        </span>
      </center>
      <div className='aboutpage'>
        <div className='box1'>
          <img src="https://img.freepik.com/free-vector/online-application-call-taxi-service-by-smart-phone_1150-48822.jpg?size=626&ext=jpg&ga=GA1.2.950370451.1706978267&semt=sph" alt="Online taxi service illustration" />
        </div>
        <div className='box2'>
          <h1>Welcome To Raghuveer Travels</h1>
          <br/>
          <p>
            Taxi cab service available for all India Local visit Airport station pickup drop Indore, Ujjain, Gwalior, Jabalpur, etc. Cab service available.
            <br />
            A local taxi or car service company that provides transportation services within the city and possibly to nearby destinations. These types of businesses typically offer various types of vehicles for hire, ranging from standard taxis to more luxurious options like sedans and SUVs. They might provide services such as airport transfers, city tours, outstation trips, and more.
            <br /><br />
            To make planning your vacation easier, you can book a cab with ease on our website, or call us on our customer support number. If you'd like to discuss your itinerary with our executives in detail, we are here to help. When you book an outstation cab with us, we'll send you a travel kit and help you plan your itinerary. We also have a handy cab booking system that will further reduce the hassles of booking a trip with us. Our expert drivers will guide you through some of the best experiences India has to offer. From the time you make a booking with us, to the time you get back home, we'll make sure you have a great road trip.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
