import React, { Component } from "react";
import { Container, Card, TextField, Button } from "@material-ui/core";
class ForgotPassword extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard">
        <Container className="main">
          <Card className="forgot-card" style={{ backgroundColor: "#fff" }}>
            <img
              src={"https://morkshub.xyz/dashboard/assets/images/logo.png"}
              style={{ width: "70px" }}
            ></img>
            <h4
              style={{
                fontSize: "22px",
                textAlign: "center",
                marginTop: "0px",
                marginBottom: "22px",
              }}
            >
              Forgot Password
            </h4>
            <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
              Please enter your registered email id to reset your password.
            </p>
            <div>
              <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
                Email*
              </p>
              <input
                id="outlined-basic"
                placeholder="Email"
                variant="outlined"
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1rem",
                  padding: "5px",
                }}
              ></input>
              <Button
                variant="contained"
                style={{
                  float: "left",
                  backgroundColor: "#308ee0",
                  marginTop: "1rem",
                  color: "#fff",
                }}
              >
                Submit
              </Button>
              <a href="/">
                <Button
                  variant="contained"
                  style={{ float: "left", margin: "1rem" }}
                >
                  Back to Login
                </Button>
              </a>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ForgotPassword;
