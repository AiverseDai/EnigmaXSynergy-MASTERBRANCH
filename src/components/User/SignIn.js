import React from 'react';
import Logo from "../images/logo.png";
import Energy from "../images/energy.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from "../styles/SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signPage}>
      <img src={Logo} alt="" />
      <div className={styles.container}>
        <img className={styles.energy} src={Energy} alt="" />
        <Card className={styles.card}>
          <h2>Energy NFT</h2>
          <Form className={styles.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className={styles.input} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className={styles.input} type="password" placeholder="Password" />
          </Form.Group>
          <Button className={styles.button} variant="success" type="submit">
            Sign In
          </Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default SignIn