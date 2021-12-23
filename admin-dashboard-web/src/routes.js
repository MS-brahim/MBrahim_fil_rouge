import Index from "views/Index.js";
import Profile from "views/screens/Profile";
import Services from "views/screens/Services.js";
import Users from "views/screens/Users.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/services",
    name: "Services",
    icon: "fas fa-taxi text-orange",
    component: Services,
    layout: "/admin",
  },
  {
    path: "/packages",
    name: "Packages",
    icon: "fas fa-cube text-blue",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "fas fa-users text-blue",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/super-users",
    name: "Super Users",
    icon: "fas fa-user-tag text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "My profile",
    icon: "ni ni-single-02 text-success",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/support",
    name: "Support",
    icon: "ni ni-support-16 text-danger",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "ni ni-user-run text-dark",
    component: Profile,
    layout: "/admin",
  },
];
export default routes;
