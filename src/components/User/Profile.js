import Title from "../../shared/Title";
import styles from "../styles/Profile.module.css";
import dp from "../images/dp.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Profile() {
  return (
    <>
      <Title title="User profile" />
      <div className={styles.container}>
        <h2 className={styles.heading}>Profile Settings</h2>
      <Form className={styles.form}>
        <img src={dp} alt="" className={styles.dp} />
        <Form.Group className={styles.group} controlId="formBasicUserName">
          <Form.Label>Enter Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className={styles.group} controlId="formBasicBio">
          <Form.Label>Enter Your Bio</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Bio" />
        </Form.Group>
        <Form.Group className={styles.group} controlId="formBasicEmail">
          <Form.Label>Enter Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className={styles.group} controlId="formBasicConsumerNumber">
          <Form.Label>Enter Your Consumer Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Your Consumer Number" />
        </Form.Group>
        <Form.Group className={styles.group} controlId="formBasicMeterNumber">
          <Form.Label>Enter Your Meter Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Your Meter Number" />
        </Form.Group>
        <Button className={styles.button} variant="success" type="submit">
          Save
        </Button>
      </Form>
      </div>
    </>
  )
}
