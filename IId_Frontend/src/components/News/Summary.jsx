import React from "react";
import Navbar from '../navbar/index'; // Update the import

import Footer from '../footer/index'; // Update the import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Summary= () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,         // Enable automatic sliding
        autoplaySpeed: 3000, 
      };
    return (
        <div>
            <Navbar />
            <div className=" pt-8 bg-lightPrimary ">
                <div className="grid grid-cols-1 text-left leading-10 text-xl p-5 gap-6">
                    <p><b>Person Name:</b>  Rahul</p>
                    <p><b>Organisation:</b>  Kartexa</p>
                    <p><b>Sector:</b>  IT</p>
                    <p><b>News:</b>  Major Financial investment under investigation</p>
                    <p><b>Relevancy Score:</b>  0.75</p>
                    
                </div>
                
                <div className="flex  justify-center p-5">
                    <button className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium">View News From Source</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Summary;
