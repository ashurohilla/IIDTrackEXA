import { Routes, Route, Navigate } from "react-router-dom";
import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
import Loginpage from "./components/authentication/Loginpage";
import Register from "./components/authentication/Register";
import PrivateRoutes from "./utils/PrivateRoutes";
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

      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
