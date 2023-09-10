import BrowseNews from '../../assets/News/BrowseNews.gif';
import myGif from '../../assets/loginpage.gif';
import LatestArticle from '../../assets/News/LatestArticle.gif';
import newsimg from '../../assets/News/News.gif';
import { Link } from "react-router-dom";

import Navbar from '../navbar/index'; // Update the import

import Footer from '../footer/index'; // Update the import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const NewsSelect = () => {
  
    return (
        <div className="px-16 h-screen  md:pt-8 ss:py-4 ss:px-6">
            <Navbar />
            <div className=" pt-8 bg-lightPrimary ">
                <div className="flex items-center justify-center">
                    <img src={newsimg} alt="my-gif" className="w-[150px] h-[80px] justify-center rounded-[30px] mr-10 border-White-100  border-2" />
                </div>
                <div className="px-20  grid  grid-cols-1 gap-20 md:grid-cols-3  lg:grid-cols-3  md:pt-10 ss:py-6 ss:px-8">
                    <Link to="/NewsBrowse">
                        <div className="p-5  bg-navy-50">
                            <img src={BrowseNews} alt="my-gif" className=" justify-center rounded-[30px] mr-10 border-White-100  border-2  h-[300px] w-[500px]"  />
                            <p className="text-center p-7 text-navy-800 text-4xl font-bold">Browse News</p>
                        </div>
                    </Link>
                    <Link to="/LatestArticle">
                        <div className="p-5  bg-navy-50">
                            <img src={LatestArticle} alt="my-gif" className=" justify-center rounded-[30px] mr-10 border-White-100  border-2  h-[300px] w-[500px]" />
                            <p className="text-center p-7 text-navy-800 text-4xl font-bold">Latest Article</p>
                        </div>
                    </Link>
                    <Link to="/SearchByQuery">
                        <div className="p-5  bg-navy-50">
                            <img src={myGif} alt="my-gif" className=" justify-center rounded-[30px] mr-10 border-White-100  border-2  h-[300px] w-[500px]" />
                            <p className="text-center p-7 text-navy-800 text-4xl font-bold">Search By Query</p>
                        </div>
                    </Link>
                    

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NewsSelect;