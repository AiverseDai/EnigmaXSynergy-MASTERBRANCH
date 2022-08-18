import { BrowserRouter } from "react-router-dom";
import Router from "./common/Router";
import "./assets/css/index.css";
// import MyNfts from "./components/User/MyNfts";
import Profile from "./components/User/Profile";
import SignIn from "./components/User/SignIn";

function App() {
  return (
    // <Profile />
    <SignIn />
    // <BrowserRouter>
    //   <Router/>
    // </BrowserRouter>
  );
}

export default App;
