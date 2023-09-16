// Admin Imports
import MainDashboard from "./views/admin/default";
// Auth Imports
import UserManagement from "./views/admin/usermanagement";
import BiometricMatching from "./views/admin/biometricMatching";
import IPTracking from "./views/admin/IPTracking";
import DeviceTracking from "./views/admin/deviceTracking";
import Messaging from "./views/admin/messaging";
import AuditLogs from "./views/admin/auditLogs";
import Settings from "./views/admin/settings";
import HelpSupport from "./views/admin/help&support";
import Alerts from "./views/admin/alerts";
import History from "./views/admin/history";
// Icon Imports
import {
  MdHome,
  MdFingerprint,
  MdPerson,
  MdLocationOn,
  MdMap,
  MdMessage,
  MdNotifications,
  MdHistory,
  MdSettings,
  MdAssignment,
  MdAccountCircle,
  MdHelp,
} from "react-icons/md";
// import Alerts from "views/admin/alerts";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome />,
    component: <MainDashboard />,
  },

  {
    name: "User Management",
    layout: "/admin",
    path: "marketplace",
    icon: <MdPerson />,
    component: <UserManagement />,
  },

  {
    name: "Biometric Matching",
    layout: "/admin",
    path: "biometricMatching",
    icon: <MdFingerprint />,
    component: <BiometricMatching />,
  },

  {
    name: "IP Tracking",
    layout: "/admin",
    path: "IPTracking",
    icon: <MdLocationOn />,
    component: <IPTracking />,
  },

  {
    name: "Device Tracking",
    layout: "/admin",
    path: "deviceTracking",
    icon: <MdMap />,
    component: <DeviceTracking />,
  },

  {
    name: "Messaging",
    layout: "/admin",
    path: "messaging",
    icon: <MdMessage />,
    component: <Messaging />,
  },

  {
    name: "Alerts & Notifications",
    layout: "/admin",
    path: "alerts",
    icon: <MdNotifications />,
    component: <Alerts />,
  },

  {
    name: "Search History",
    layout: "/admin",
    path: "history",
    icon: <MdHistory />,
    component: <History />,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "settings",
    icon: <MdSettings />,
    component: <Settings />,
  },
  {
    name: "Audit Logs",
    layout: "/admin",
    path: "auditLogs",
    icon: <MdAssignment />,
    component: <AuditLogs />,
  },

  {
    name: "Help & Support",
    layout: "/admin",
    path: "help",
    icon: <MdHelp />,
    component: <HelpSupport />,
  },
];
export default routes;
