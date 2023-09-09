import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biometric from "./components/Biometric/Biometric"
import SearchingMatching from "./components/Biometric/SearchingMatching"
import SecuritySetting from "./components/Setting/SecuritySetting"
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route element={<Biometric/>} path="/Biometric" exact />
          <Route element={<SearchingMatching/>} path="/SearchingMatching" exact />
          <Route element={<SecuritySetting/>} path="/SecuritySetting" exact />
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
