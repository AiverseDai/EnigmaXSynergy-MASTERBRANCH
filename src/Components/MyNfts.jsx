import {useState} from 'react';
import styles from "./MyNfts.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../images/logo.png';
import Navbar from './Navbar';

export default function MyNfts() {
  const [nfts, setNfts] = useState([1,1,1,1]);
  const [nftInformation, setNftInformation] = useState({
    name: "Bappi #022",
    price: "1"
  });
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Collected NFTs</h1>
        <div className={styles.cardSection}>
          {
            nfts.map((nft) => (
              <Card className={styles.card} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className={styles.title}>{nftInformation.name}</Card.Title>
                <Card.Text className={styles.price}>
                  Price: {nftInformation.price} MATIC
                </Card.Text>
              </Card.Body>
            </Card>
            ))
        }
      </div>
      </div >
    </>
  );
}
