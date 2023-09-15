
// Admin Imports
import MainDashboard from "./views/admin/default";
// Auth Imports
import NFTMarketplace from "./views/admin/marketplace";


// Icon Imports
import {
  MdHome,

} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome/>  ,
    component: <MainDashboard/> ,
  },

  {
    name: "Biometrics",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdHome/>  ,
    component: <NFTMarketplace/> ,
  },
 
 

 

];
export default routes;
