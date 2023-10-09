import { Routes, Route, Navigate } from "react-router-dom";
import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
import Loginpage from "./components/authentication/Loginpage";
import Register from "./components/authentication/Register";
import PrivateRoutes from "./utils/PrivateRoutes";
import Skills from "./views/admin/profileManagement/components/skills";
import Qualifications from "./views/admin/profileManagement/components/Qualifications";
import MissionHistories from "./views/admin/profileManagement/components/MissionHistories";
import Dropdown from "./views/admin/usermanagement/components/dropdown";
const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
      </Route>
      <Route path="LoginPage" element={<Loginpage />} />
      <Route path="Register" element={<Register />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="Qualifications" element={<Qualifications />} />
      <Route path="MissionHistories" element={<MissionHistories />} />
      <Route path="Dropdown" element={<Dropdown />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
