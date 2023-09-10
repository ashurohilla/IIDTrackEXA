import React, { useState } from 'react';
import Header from './Dashboard/Header';
import { useNavigate } from "react-router-dom";
import Card from './card';
import Navbar from './navbar/index'; // Update the import
import Footer from './footer/index'; // Update the import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
 
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000,
  };

  const [activePopup, setActivePopup] = useState(null);

  const handleBrowseByCategory = () => {
    return navigate("/newsbrowse");
  }; //for news

  const handleLatestArticles = () => {
    return navigate("/LatestArticle");
  };//for news

  const handleFetchByQuery = () => {
    return navigate("/SearchByQuery");
  };//for news

  
  const handleRunQuery = () => {
    return navigate("/runQuery");
  }; //for directory access
  
  const handleBrowseAll = () => {
    return navigate("/BrowseAll");

  };//for directory access

  const togglePopup = (popupName) => {
    setActivePopup(activePopup === popupName ? null : popupName);
  };
  

  return (

  <div className="overflow-hidden">  
 
    <Navbar />
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue-500 overflow-hidden mt-20">
    
    {activePopup === "news" && (
    
    <div className="popup border-2 border-White-100 bg-White-100 flex items-center justify-center p-5 mt-10 ml-20 mr-20  mb-10 rounded-[20px]" >

    
     <div> <button onClick={handleBrowseByCategory} className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4" >Browse by Category</button> </div>

     <div> <button onClick={handleLatestArticles}  className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4">Latest Articles</button></div>

     <div> <button onClick={handleFetchByQuery}  className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4">Fetch by Query</button>
     
    </div>
    <button onClick={() => togglePopup(null)}>
    <img
                className="h-10 w-10 m-2 ml-4"
                src="src/assets/close.png"
                alt="Close!"
              />
    </button>

    </div>
  )
  }
  {activePopup === "directory" && (
   
  <div className="popup border-2 border-White-100 bg-White-100 flex items-center justify-center p-5 mt-10 ml-20 mr-20 mb-10 rounded-[20px]">
     
  <div>
    <button onClick={handleRunQuery} className="text-lightBlue-100 pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4">
      Run Query
    </button>
  </div>
  <div>
    <button onClick={handleBrowseAll} className="text-lightBlue-100 pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4">
      Browse All
    </button>
  </div>
  <button onClick={() => togglePopup(null)}>
    <img
                className="h-10 w-10 m-2 ml-4"
                src="src/assets/close.png"
                alt="Close!"
              />
    </button>
</div>
  )} 
    <div className="flex w-full max-w-screen-xl border-2 mt-20 shifted  rounded-[20px]" >

          {/* Left column */}

    <div className="w-3/4 h-[400px] rounded-[20px] bg-White-100 p-5 rounded-l-md m-4 flex flex-col items-center justify-center space-y-2 ">
     <p className="text-xl md:text-4xl font-bold text-darkBlue-500" > Want to Learn more ? </p>
     <h1 className="text-l md:text-3xl text-darkBlue-500"> Login Or Register to know more !</h1>
     {/* <Link to="/login" className="inline-block pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium">Login
          </Link> */}
      {/* <div className="w-3/4 h-[400px] rounded-[20px] bg-White-100 p-5 rounded-l-md m-4 flex flex-col items-center justify-center space-y-4">
            <p> Want to Learn more ? </p>
            <h1> Login Or Register to know more !</h1> */}

            {auth ? (
              <button onClick={() => togglePopup("news")}
                className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium block"
              >
              News
             
              </button>
            ) : (
              <Link
                to="/login"
                className="text-lightBlue-100  pt-2 pb-2 pl-2 pr-2 bg-lightBlue-500  border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium"
              >
              Login for getting News Updates
              </Link>
            )}

            {auth ? (
              <button onClick={() => togglePopup("directory")}className="text-lightBlue-100 pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium block">
              Directory access
            </button>
            ) : (
              <Link
                to="/login"
                className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500  border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium"
              >
              Login for getting Directory access Updates
              </Link>
            )}
          </div>


        {/* Right column */}

        <div className="w-3/4 rounded-[20px] overflow-hidden h-[400px] bg-gray-100 p-5 rounded-r-md m-4">
            <Slider {...carouselSettings}>
              <img
                className="h-full w-auto"
                src="./src/assets/news1.jpg"
                alt="Image 1"
              />


              <img
                className="h-full w-auto"
                src="src/assets/news2.jpg"
                alt="Image 2"
              />


              <img
                className="h-full w-auto"
                src="src/assets/news3.jpg"
                alt="Image 3"
              />


              <img
                className="h-full w-auto"
                src="src/assets/news4.jpg"
                alt="Image 3"
              />


              <img
                className="h-full w-auto"
                src="src/assets/news5.jpg"
                alt="Image 3"
              />


              {/* Add more image slides */}
            </Slider>
          </div>
        </div>
      </div>
    
      <Footer/>
</div>


   
  )
};

export default Home;



