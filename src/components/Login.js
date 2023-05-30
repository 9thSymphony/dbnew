import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        setErrorMessage("User does not exist");
      }
    } catch (e) {
      setErrorMessage("Wrong details");
      console.log(e);
    }
  }

  const appContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(50deg, #1b6d22, #24993d 48%, #40a82b)',
  };
  
  const authFormContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5rem',
    border: '1px solid white',
    borderRadius: '10px',
    margin: '0.5rem',
  };
  
  const labelStyle = {
    textAlign: 'left',
    padding: '0.50rem 0',
  };
  
  const inputStyle = {
    margin: '0.50rem 0',
    padding: '1rem',
    border: 'none',
    borderRadius: '10px',
  };
  
  const buttonStyle = {
    border: 'none',
    backgroundColor: 'aliceblue',
    padding: '15px',
    borderRadius: '20px',
    cursor: 'pointer',
    color: '#103618',
  };
  
  const linkButtonStyle = {
    background: 'none',
    color: 'whitesmoke',
    textDecoration: 'underline',
  };
  
  return (
    <div className="App" style={appContainerStyle}>
      <div className="auth-form-container" style={authFormContainerStyle}>
        <Card className="auth-card">
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Label column sm={3} style={labelStyle}>Email address</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage(''); // Clear error message when input changes
                    }}
                    style={inputStyle}
                  />
                </Col>
              </Row>
  
              <Row className="mb-3">
                <Form.Label column sm={3} style={labelStyle}>Password</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMessage(''); // Clear error message when input changes
                    }}
                    style={inputStyle}
                  />
                </Col>
              </Row>
  
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
  
              <Button variant="secondary" type="Log in" onClick={submit} style={buttonStyle}>
                Submit
              </Button>
            </Form>
            <Link to="/signup">Signup Page</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );  
}

export default Login;