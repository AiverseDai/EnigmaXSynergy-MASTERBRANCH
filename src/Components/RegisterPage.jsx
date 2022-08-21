import {useState} from 'react';
import Logo from "../images/logo.png";
import Energy from "../images/energy.png";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from "./Register.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const SignIn = ({show, setShow}) => {
  return (
    
    <div className={styles.signPage}>

    {
      show &&
      <div className={styles.container}>
        <Card className={styles.card}>
          <h2 >Energy NFT</h2>
          <Form className={styles.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Register Id</Form.Label>
            <Form.Control className={styles.input} type="text" placeholder="Enter Register Id" />
          </Form.Group>
          <Button className={styles.button} variant="success" type="submit">
            Sign In
          </Button>
          </Form>
        </Card>
      </div>

    }  
    </div>
  )
}

export default SignIn