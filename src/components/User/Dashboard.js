import Title from '../../shared/Title';
import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <>
      <Title title={"User Dashboard"} />
      <button><Link to="/user/profile">Profile</Link></button>
      <button><Link to="/user/nfts">My Nfts</Link></button>
    </>
  )
}
