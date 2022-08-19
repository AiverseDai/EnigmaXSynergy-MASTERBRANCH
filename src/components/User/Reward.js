import {useState} from 'react';
import graph from "../images/graph.png";
import reward from "../images/reward.png";
import Title from '../../shared/Title';
import styles from "../styles/Reward.module.css";
import Button from 'react-bootstrap/Button';


const Reward = () => {
  const [clock, setClock] = useState(new Date().toString());
  setInterval(() => {
   setClock(new Date().toString());
  }, 1000);
  return (
    <div className={styles.container}>
      <Title title="My Nfts" />
      <h2 className={styles.heading}>Monthly Energy Consumption</h2>
      <img src={graph} alt="" />
      <ul>
        <li>You used the most energy in May month.</li>
        <li>You consumed 15kWh more than last month.</li>
      </ul>
      <Button className={styles.button} variant="success">Collect Reward</Button>
      <p className={styles.rewardText}>Collect Your Next Reward</p>
      <div className={styles.clock}>{clock}</div>
      <img src={reward} alt="" className={styles.reward} />
    </div>
  )
}

export default Reward;