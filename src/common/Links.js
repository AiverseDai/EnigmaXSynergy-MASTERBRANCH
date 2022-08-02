import Login from "../components/Auth/Login";
import Home from "../components/Home";
import Dashboard from "../components/User/Dashboard";
import Profile from "../components/User/Profile";
import MyNfts from "../components/User/MyNfts";

export const Links = [
    {
        name: "Home",
        path: "/",
        element: <Home/>        
    },
    {
        name: "Login",
        path: "/login",
        element: <Login/>        
    },
    {
        name: "Profile",
        path: "/user/profile",
        element: <Profile/>        
    },
    {
        name: "Dashboard",
        path: "/user/dashboard",
        element: <Dashboard/>        
    },
    {
        name: "My Nfts",
        path: "/user/nfts",
        element: <MyNfts/>        
    },
];