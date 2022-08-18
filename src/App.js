import { BrowserRouter } from "react-router-dom";
import Router from "./common/Router";
import "./assets/css/index.css";
import MyNfts from "./components/User/MyNfts";

function App() {
  return (
    <MyNfts />
    // <BrowserRouter>
    //   <Router/>
    // </BrowserRouter>
  );
}

export default App;
