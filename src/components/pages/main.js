import React, { Component } from "react";
import logo from '../../assets/logo.png'
import { TextField, Container, Card, Button } from "@material-ui/core";
class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div
        className="dashboard "
      >
        <Container className="main">
          <Card className="login-card" style={{borderRadius:'10px'}}>
            <img
              src={logo}
              className="logo"
            ></img>
            <p className="login">
              <strong>Login</strong>
            </p>
            <hr
              style={{
                textAlign: "center",
                marginBottom: "54px",
                marginTop: "0px",
                width: "50px",
                border: "1px solid #2f5a77",
              }}
            ></hr>
            <TextField
              id="standard-password-input"
              label="Enter Email ID"
              type="email"
              style={{
                align: "left",
                width: "100%",
                border: "none",

                fontFamily: "roboto",
                fontSize: "16px",
                color: "#c2c2c2 !important",
              }}
            />
            <TextField
              id="standard-password-input"
              label="Enter Password"
              type="Password"
              style={{
                align: "left",
                width: "100%",
                border: "none",
                fontFamily: "roboto",
                fontSize: "16px",
                color: "#c2c2c2 !important",
              }}
            />
            <a href="/dashboard" style={{textDecoration:'none'}}>
            <Button
              variant="contained"
              style={{
                marginTop: "40px",
                width: " 244px",
                height: "60px",
                marginRight: "auto",
                marginLeft: "auto",
                backgroundColor: "#308ee0",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
            </a>
            <div style={{marginTop:'12px',textAlign:'center !important'}}>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password ?
              </a>
            </div>
            <div style={{marginTop:'60px',marginLeft:'auto',marginRight:'auto'}}>
              <span style={{fontSize:'18px',color:'#2f5a77'}}>Not a member ? </span>
              <a href="/signup" style={{fontSize:'18px',color:'#2f5a77',textDecoration:'none'}}>Create New account </a>

            </div>
          </Card>
         <div>
            <ul style={{marginTop:'40px',listStyleType:'none',padding:'0px'}}>
            <li>
              <a href="/" style={{fontSize:'18px',color:'#c2c2c2',fontFamily:'roboto',textDecoration:'none'}}>Terms & Conditions</a>
              <a href="/" style={{fontSize:'18px',color:'#c2c2c2',fontFamily:'roboto',textDecoration:'none',marginLeft:'2%'}}>Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright-section">Copyright © 2020 Vossle®. All rights reserved.</p>
         </div>
        </Container>
      </div>
    );
  }
}

export default DashBoard;
