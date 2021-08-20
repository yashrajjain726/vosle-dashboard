import React, { Component } from 'react';
import logo from '../../assets/logo.png'
import { Container ,Button} from '@material-ui/core';
class SignUp extends Component {;
    state = {  }
    render() { 
        return ( 
            <div>
        <Container>
          <Container className="signup-card">
            <img
              src={logo}
              className="logo"
            ></img>
            <h4
              style={{
                fontSize: "22px",
                textAlign: "center",
                marginTop:'0px',
                color:'#404852'
              }}
            >
              SignUp
            </h4>
            <p style={{ textAlign: "left", width: "100%", fontSize: "20px",fontWeight:'bolder' }}>
              Personal Details
            </p>
            <div>
              <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
               Name (Name of the Contact Person)*
              </p>
              <input
                id="outlined-basic"
                placeholder="Name"
                variant="outlined"
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1rem",
                  padding: "5px",
                }}
              ></input>
               <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
               Contact Number*
              </p>
              <input
                id="outlined-basic"
                placeholder="Contact Number"
                variant="outlined"
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1rem",
                  padding: "5px",
                }}
              ></input>
               <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
               Email*
              </p>
              <input
                id="outlined-basic"
                placeholder=" Email"
                variant="outlined"
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1rem",
                  padding: "5px",
                }}
              ></input>
               <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
               Password
              </p>
              <input
                id="outlined-basic"
                placeholder="Password"
                variant="outlined"
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1rem",
                  padding: "5px",
                }}
              ></input>
               <p style={{ textAlign: "left", width: "100%", fontSize: "13px" }}>
               Confirm Password 
              </p>
              <input
                id="outlined-basic"
                placeholder="Confirm Password"
                variant="outlined"
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1rem",
                  padding: "5px",
                }}
              ></input>
               <center>
               <Button
                variant="contained"
                style={{
                  backgroundColor: "#308ee0",
                  float:'center',
                  margin:'0.5rem',
                  color: "#fff",
                }}
              >
                Get OTP
              </Button>
              <a href="/" style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{backgroundColor: "#308ee0",color: "#fff",margin:'0.5rem'}}
                >
                  Back to Login
                </Button></a>
               </center>
            </div>
          </Container>
        </Container>
            </div>
         );
    }
}
 
export default SignUp;