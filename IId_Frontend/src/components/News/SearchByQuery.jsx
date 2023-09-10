import Navbar from '../navbar/index'; // Update the import
import Footer from '../footer/index'; // Update the import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DashApi from '../../dashboardapis/api';
import { useState, useEffect } from "react";
import InputField from '../fields/InputField';
const SearchByQuery = () => {
    const [query, setQuery] = useState('');
    const [NewsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    let debounceTimer;
    
    if (query.trim() === '') {
      // Reset news data and error if the query is empty
      setNewsData(null);
      setError(null);
      return;
    }

    // Delay the API request by 500 milliseconds after the user stops typing
    debounceTimer = setTimeout(async () => {
      // Set loading to true while fetching data
      setLoading(true);

      try {
        const response = await DashApi.newsdata(query);
        console.log(response);

        if (response.data && response.status === true) {
          setError(response.data.msg);
        } else {
          console.log(response);
          setNewsData(response.data);
          return setLoading(false);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);

        setLoading(false);

        if (err.response) {
          setError(err.response.data.msg);
        } else {
          setError('There has been an error.');
        }
      }
    }, 500);

    // Clear the debounce timer on each query change
    return () => clearTimeout(debounceTimer);

  }, [query]);

    return (

        <div className='page-container'>
            <Navbar />
            <div className=" flex m-10 mt-20 p-5  justify-end">       
             <div className="flex ">
                              
             <InputField  className=" pt-2 pb-2 pl-5 pr-5 mt-0 font-bold text-White-100 block" value={query}
              onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Find your news...     "/>
            </div>
                     <div className=" ">
                       <button className="text-lightBlue-100 pt-3 pb-3 pl-5 pr-5 bg-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4 mt-8">Run Query</button>
               
                       <button className="text-lightBlue-100 pt-3 pb-3 pl-5 pr-5 bg-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4">Kartexa Crime</button>
                      </div>
                     </div>
            <div className='content-container shifted mt-10' >
                <div className=" rounded-[10px] p-5 overflow-auto  shadow hidden md:block ">
                    {/* <div className="flex  justify-end p-5">
                        <button className="text-lightBlue-500  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-100 border-2 border-lightBlue-500 rounded-[10px] font-medium">Fetch Latest</button>
                    </div> */}
                    <div className='flex' >
                    </div>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <div className=" relative overflow-x-auto">
                    {NewsData && NewsData.length > 0 ? (
                      <div>
  <table className='justify-center w-full bg-darkBlue-500 mt-0'>
    <thead className="bg-gray-300 text-darkBlue-500">
      <tr>
      <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>ID</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Sector</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Organisation</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>News</th>
      <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Person Name</th>
      <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Relevancy Score</th>
      <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Created At</th>
      <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>Like Count</th>
      </tr>
    </thead>
    <tbody className='divide-y divide-red-100 text-White-100 '>
      {NewsData.map((data, index) => (
        <tr key={index}>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.id}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.sector}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.organisation}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.News}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.person_name}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.relevancy_score}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.created_at}</td>
        <td className='whitespace-nowrap text-left p-4 text-sm '>{data.like_count}</td>

        </tr>
      ))}
    </tbody>
  </table>
  <div className="flex justify-center p-5  ">
<button className="text-lightBlue-100  pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium">1/1</button>
</div>
  </div>
) : (
  <div className='text-center font-bold text-White-100 text-xl mt-40' >No news found !</div>
)}


    </div>
                    
                </div>

            </div>
            <Footer />

        </div>
    )
}


export default SearchByQuery;
