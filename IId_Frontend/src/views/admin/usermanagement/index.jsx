import Dropdown from "./components/dropdown";
import { useState,useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const UserManagement = () => {
//   return (
//     <div >
//       <div >
//         <table>
//           <thead className="mt-40px"  >Manage User's Profile here.</thead>
//           <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left' >SNo.</th>
//           <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left' >Name</th>
//           {/* <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left' >Name</th> */}
//           <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left' >Email</th>
//           <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left' >Contact</th>
//           <th  className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left' >Action</th>
//           <tr>
//             <td>1</td>
//             <td>ABC</td>
//             <td>abc@gmail.com</td>
//             <td>0000000000</td>
//             <td>
//               {" "}
//               <div className="flex justify-center items-center h-screen">
//                 <Dropdown />
//               </div>
//             </td>
//           </tr>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;


const UserManagement = () => {
    const [Profiledata, setProfiledata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8; 

    useEffect(() => {
        setLoading(true);

        const Profiledata = async (event) => {
          try {
            const response = await DashApi.Profiledata();
            console.log(response);
    
            if (response.data && response.status === true) {
              setError(response.data.msg);
            } else {
             
                const sortedData = response.data.sort((a, b) => a.id - b.id);
                setProfiledata(sortedData);
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
           

            setLoading(false);
        };

        Profiledata();
    }, []);

    // Calculate the range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = Profiledata.slice(startIndex, endIndex);

    return (
        <div className='page-container' >

            <div className='content-container'>
                <div className="pt-8 m-5 rounded-[10px] mt-20 overflow-auto rounded-lg shadow hidden md:block ">
                    {/* Your Fetch Latest button */}
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <div className="pt-5 relative overflow-x-auto">
                        {itemsToDisplay.length > 0 ? (
            <table className='justify-center w-full m-2 bg-darkBlue-500'>
           <thead className="bg-gray-300 text-darkBlue-500">
      <tr>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>SNo.</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Name</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>EMail</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Contact</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Address</th>
        </tr>
    </thead>
                               
       <tbody className='divide-y divide-red-100 ' >
         {itemsToDisplay.map((data, index) => (
          <tr key={index} className='text-White-100' >
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.Sno}</td>  
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.name}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.email}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.contact}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '> 
              {" "}
              <div className="flex justify-center items-center h-screen">
                <Dropdown />
              </div>
            </td>
         
           </tr>
        ))}
      </tbody>
      </table>
                        ) : (
                            <p>No data found</p>
                        )}
                    </div>

                  
                </div>

            </div>


        </div>
    );
};

export default UserManagement;
