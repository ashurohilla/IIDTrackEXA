import React from "react";

import FinancialCrime from '../../assets/News/FinancialCrime.jpg';
import BriberyCorruption from '../../assets/News/BriberyCorruption.gif';
import AntitrustViolation from '../../assets/News/AntitrustViolation.jpg';
import CorporateEspionage from '../../assets/News/CorporateEspionage.jpg';
import MoneyLaundering from '../../assets/News/MoneyLaundering.jpg';
import FradulentAdvertising from '../../assets/News/FradulentAdvertising.jpg';
import GenderRelatedCrime from '../../assets/News/GenderRelatedCrime.jpg';
import CyberCrime from '../../assets/News/CyberCrime.gif';
import HealthSafety from '../../assets/News/HealthSafety.gif';

import Navbar from '../navbar/index'; // Update the import

import Footer from '../footer/index'; // Update the import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const NewsBrowse = () => {
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
            <div className=" pt-8 bg-darkBlue-500 ">
                <div className="px-20 mx-6 grid  grid-cols-1 gap-40 md:grid-cols-3  lg:grid-cols-3  md:pt-10 ss:py-6 ss:px-8 ">
                    <div className="p-5  bg-White-100  border-2  rounded-[20px]">
                        <img src={FinancialCrime} alt="my-gif" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold border-2 bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Financial Crime</p>
                    </div>
                    <div className="p-5  bg-White-100  border-2  rounded-[20px]">
                        <img src={BriberyCorruption} alt="my-gif" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Bribery and Corruption</p>
                    </div>
                    <div className="p-5  bg-White-100  border-2  rounded-[20px]">
                        <img src={AntitrustViolation} alt="AntitrustViolation" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Antitrust Violation</p>
                    </div>

                </div>
                <div className="px-20  mx-6 grid  grid-cols-1 gap-40 md:grid-cols-3  lg:grid-cols-3  md:pt-10 ss:py-6 ss:px-8 ">
                    <div className="p-5  bg-White-100 border-2  rounded-[20px]">
                        <img src={CyberCrime} alt="my-gif" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Cyber Crime</p>
                    </div>
                    <div className="p-5  bg-White-100 border-2  rounded-[20px]">
                        <img src={CorporateEspionage} alt="my-gif" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Corporate Espionage</p>
                    </div>
                    <div className="p-5  bg-White-100 border-2  rounded-[20px]">
                        <img src={HealthSafety} alt="AntitrustViolation" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Health and Safety Violation</p>
                    </div>

                </div>
                <div className="px-20 mx-6 grid  grid-cols-1  gap-40 md:grid-cols-3  lg:grid-cols-3  md:pt-10 ss:py-6 ss:px-8 ">
                    <div className="p-5  bg-White-100 border-2  rounded-[20px]">
                        <img src={MoneyLaundering} alt="my-gif" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Money Laundering</p>
                    </div>
                    <div className="p-5  bg-White-100 border-2  rounded-[20px]">
                        <img src={FradulentAdvertising} alt="my-gif" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Fradulent Advertising</p>
                    </div>
                    <div className="p-5  bg-White-100 border-2  rounded-[20px]">
                        <img src={GenderRelatedCrime} alt="AntitrustViolation" className="w-[800px] h-[200px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
                        <p className="text-center text-2xl mt-3 font-bold  bg-lightBlue-500 border-lightBlue-500 text-White-100 rounded-[10px]">Gender Related Crime</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default NewsBrowse;
