import Title from "../shared/Title";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <button>
        <NavLink style={{ textDecoration: 'none' }} to="/login">Login</NavLink>
      </button>
    </>
  )
}

export default Home;