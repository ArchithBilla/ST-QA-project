import axios from 'axios'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signin(props) {
  const url = ''
  props.pageStatus('Signin')
  const [userName, setUserNAme] = useState("");
  const [password, setPassword] = useState("");

  const [errorMassage, setErrorMassage] = useState("");

  const handleUserNameChange = (e) => {
    setUserNAme(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async  () => {
    console.log(userName,password)
axios.post("https://reqres.in/api/login", {
  user_email: userName,
  password: password
    })
    .then((response) => {
      console.log(response);
    });
  };
  const cancelHandler = () => {
    setUserNAme("");
    setPassword("");
  };

  return (
    <div className="signin_section">
      <div className="sign_in_form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Enter Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={userName}
              onChange={handleUserNameChange}
              required
              isInvalid={false}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              isInvalid={false}
            />
          </Form.Group>
          <Form.Text className="text-muted">Don't have an accout?</Form.Text>
          <Button className="signup_button" variant="link">
            {" "}
            <Link to="signup">Sign up</Link>
          </Button>

          <div className="submit_button">
            <Button id="cancel_button" variant="danger" onClick={cancelHandler}>
              Cancel
            </Button>{" "}
            <Button
              variant="primary"
              id="submit_button"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
