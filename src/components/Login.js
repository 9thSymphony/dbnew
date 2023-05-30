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

  return (
    <div className="App">
      <div className="auth-form-container">
        <Card className="auth-card" style={{ backgroundColor: "green", color: "white" }}>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Label column sm={3}>Email address</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage(""); // Clear error message when input changes
                    }}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Label column sm={3}>Password</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMessage(""); // Clear error message when input changes
                    }}
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="secondary" type="submit" onClick={submit}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;