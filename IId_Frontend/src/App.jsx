import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import Loginpage from "./components/authentication/Loginpage";
import Dashboard from "./components/Dashboard/Dashboard";
import PopupPage from "./components/Dashboard/Popup";
import Register from "./components/authentication/Register";
import NotFound from "./components/NotFound";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/profile/Profilepage";
import Profiledetail from "./components/profile/SeeProfile";
import NewsBrowse from "./components/News/NewsBrowse";
import NewsSelect from "./components/News/NewsSelect";
import LatestArticle from "./components/News/LatestArticle";
import SearchByQuery from "./components/News/SearchByQuery";
import Summary from "./components/News/Summary";
import RunQuery from "./components/directory_access/runQuery";
import BrowseAll from "./components/directory_access/BrowseAll";
import TermsPolicies from "./components/footer/TermsPolicies";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Register />} path="/register" exact />
          <Route path="/login" element={<Loginpage />} exact />
          <Route element={<PrivateRoutes />}>

                <Route element={<Dashboard />} path="/dashboard" />

                <Route element={<NewsSelect />} path="/news" exact />
                <Route element={<NewsBrowse />} path="/newsbrowse" exact />
                <Route element={<LatestArticle />} path="/LatestArticle" exact />
                <Route element={<SearchByQuery />} path="/SearchByQuery" exact />
                <Route element={<Summary />} path="/Summary" exact />
                <Route element={<TermsPolicies />} path="/TermsPolicies" exact />
                <Route element={<PopupPage />} path="/popuppage" exact />
                <Route element={<RunQuery/>} path="/RunQuery" exact />
                <Route element={<BrowseAll/>} path="/BrowseAll" exact />

                <Route path="/Profile" element={<Profile />}>
                  <Route index element={<Profiledetail />} />
                  <Route path="profilepage" element={<Profiledetail />} />
                  <Route path="createprofile" element={<CreateProfile />}></Route>
                </Route>



            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
