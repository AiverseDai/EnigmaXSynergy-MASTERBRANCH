import {useState} from 'react';
import Title from '../../shared/Title';
import styles from "../styles/MyNfts.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyNfts() {
  const [nfts, setNfts] = useState([1,1,1,1]);
  const [nftInformation, setNftInformation] = useState({
    name: "",
    price: ""
  });
  
  return (
    <>
      <Title title="My Nfts" />
      <h1 className={styles.heading}>Collected NFTs</h1>
      <div className={styles.cardSection}>
        {
          nfts.map((nft) => (
            <Card className={styles.card} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title className={styles.title}>{nftInformation.name}</Card.Title>
              <Card.Text className={styles.price}>
                Price: {nftInformation.price}
              </Card.Text>
            </Card.Body>
          </Card>
          ))
      }
    </div>
  </>
  );
}
