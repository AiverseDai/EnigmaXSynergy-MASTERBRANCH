import React from "react";
import { Container, Grid } from "@material-ui/core/";
import {
  homeOne,
  lightBulb,
  moneyDesign,
  earthHour,
  earthhourTwo,
  unplug,
  upArrow
} from "../assets";
const Home = () => {
  return (
    <div>
      <Grid container spacing={2} style={styles.containerStlye}>
        <Grid item xs={6} sm={6} lg={6} xl={6} md={6}>
          <p style={styles.textOne}>
            <span style={styles.firstLetter}>T</span>he World’s Premier Green
            Energy and Non-Fungible Tokens
          </p>
          <p style={styles.textTwo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla{" "}
          </p>
          <div>
            <button style={styles.signUpBtn}>
              <span style={styles.btnText}>Sign up/Login</span>
            </button>
          </div>
        </Grid>
        <Grid item sm={6} lg={6} xl={6} xs={6} md={6}>
          <div>
            <img src={homeOne} style={styles.homeOne} />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={styles.containerStlyeTwo}>
        <Grid item xs={6} sm={6} lg={6} xl={6} md={6}>
          <img src={lightBulb} style={styles.lightBulb} />
        </Grid>

        <Grid item sm={6} lg={6} xl={6} xs={6} md={6}>
          <Grid container style={styles.bluebg}>
            <p style={styles.textThree}>
              <span style={styles.firstLetter}>S</span>ee how much energy you
              have Saved and Consumed
            </p>
            <p style={styles.textFour}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla{" "}
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={styles.containerStlye}>
        <Grid item xs={6} sm={6} lg={6} xl={6} md={6}>
          <p style={styles.textFive}>
            <span style={styles.firstLetter}>T</span>his is how you can save
            Energy to collect NFTs
          </p>
        </Grid>
        <Grid item sm={6} lg={6} xl={6} xs={6} md={6}>
          <div>
            <img src={moneyDesign} style={styles.homeOne} />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={styles.containerStlyeThree}>
        <Grid item xs={4} sm={4} lg={4} xl={4} md={4}>
          <img src={earthHour} style={styles.homeOne} />
          <p>Choose the right light</p>
        </Grid>
        <Grid item sm={4} lg={4} xl={4} xs={4} md={4}>
          <img src={earthhourTwo} style={styles.homeOne} />
          <p>Unplug Chargers</p>
        </Grid>
        <Grid item sm={4} lg={4} xl={4} xs={4} md={4}>
          <img src={unplug} style={styles.homeOne} />
          <p>Turn off your lights</p>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={styles.bottomContainer}>
        <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
          <p>Back to Top<img src={upArrow}/></p>
        </Grid>
      </Grid>
    </div>
  );
};
const styles = {
  homeOne: {
    width: "100%",
    height: "auto",
  },
  containerStlye: {
    margin: "20px 20px",
    padding: "20px",
  },
  textOne: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "60px",
    lineHeight: "95px",
    color: "#397909",
  },
  firstLetter: {
    fontSize: "70px",
  },
  textTwo: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#494949",
    margin: "40px auto",
  },
  signUpBtn: {
    width: "400px",
    textAlign: "center",
    margin: "45px 50px",
    background: "green",
    height: "76px",
    borderRadius: "28px",
    cursor: "pointer",
    border: "none",
  },
  btnText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "44px",

    color: "#FFFFFF",
  },
  containerStlyeTwo: {
    margin: "20px 20px",
    padding: "20px",
  },
  textThree: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "60px",
    lineHeight: "95px",

    color: "#0A8270",
    marginTop: "100px",
    marginBottom: "40px",
    marginLeft: "-93px",
  },
  bluebg: {
    backgroundImage: "linear-gradient(04.65deg, #E3FFDF 14.77%, #ECFFFC 87%)",
  },
  textFour: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#494949",
    marginLeft: "-93px",
    marginBottom: "40px",
  },
  textFive: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "60px",
    lineHeight: "95px",
    color: "#397909",
  },
  lightBulb: {
    width: "100%",
    height: "auto",
  },
  containerStlyeThree: {
    margin: "20px 20px",
    padding: "20px",
    textAlign: "center",
  },
  bottomContainer: {
    margin: "20px 20px",
    padding: "20px",
    textAlign: "center",
  },
};

export default Home;
