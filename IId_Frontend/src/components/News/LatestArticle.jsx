import Navbar from "../navbar/index";
import Footer from "../footer/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashApi from "../../dashboardapis/api";
import { useState, useEffect } from "react";

const LatestArticle = () => {
  const [Newsdata, setNewsdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items to display per page

  useEffect(() => {
    setLoading(true);

    const Employeedata = async (event) => {
      try {
        const response = await DashApi.latestnews();
        console.log(response);

        if (response.data && response.status === true) {
          setError(response.data.msg);
        } else {
          console.log(response);
          setNewsdata(response.data);
          return setLoading(false);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);

        setLoading(false);

        if (err.response) {
          setError(err.response.data.msg);
        } else {
          setError("There has been an error.");
        }
      }

      setLoading(false);
    };

    Employeedata();
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(Newsdata.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = Newsdata.slice(startIndex, endIndex);

  return (
    <div>
      <Navbar />
      <div>
        <div className="pt-8 bg-lightPrimary m-16 border-lightPrimary rounded-[10px]">
          {/* Your Fetch Latest button */}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className="pt-5 relative overflow-x-auto">
            {itemsToDisplay.length > 0 ? (
              <table className='justify-center w-full bg-darkBlue-500 mt-0'>
                <thead className="bg-gray-300 text-darkBlue-500">
                  <tr>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4' >ID</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4' >Sector</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Organisation</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>News</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Person Name</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Relevancy Score</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4' >Created At</th>
                    <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4' >Like Count</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-red-100 text-White-100 '>
                  {itemsToDisplay.map((data, index) => (
                    <tr key={index}>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.id}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.sector}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.organisation}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.News}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.person_name}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.relevancy_score}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.created_at}</td>
                      <td  className='whitespace-nowrap text-left p-4 text-sm ' >{data.like_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data found</p>
            )}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center p-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-lightBlue-500 text-White-100"
                    : "bg-lightBlue-100 text-lightBlue-500"
                } pt-2 pb-2 pl-5 pr-5 border-2 border-lightBlue-500 rounded-[10px] font-medium`}
              >
                {index + 1}/{totalPages}
              </button>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LatestArticle;
