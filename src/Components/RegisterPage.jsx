import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Register.module.css';

const LogIn = ({login, setLogin}) => {
  return (  
    <div >
      {
        login &&
        <div className={styles.loginContainer}>
          <AiOutlineClose size={30} className={styles.close} onClick={() => setLogin(false)} />
          <Form className={styles.loginForm}>
            <h2 className={styles.heading}>Register Id</h2>
            <Form.Group className={styles.formGroup} controlId="formBasicEmail">
              <Form.Control type="email" className={styles.formControl} placeholder="Enter Register Id" />
            </Form.Group>
            <Form.Group className={styles.formGroup} controlId="formBasicPassword">
            <Button varient="success" className={styles.loginButton}>Signup</Button>
          </Form.Group>
          </Form>
        </div>
      }
    </div>
  )
}

export default LogIn;