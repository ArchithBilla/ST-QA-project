import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signin(props) {
  const navigate = useNavigate();
  props.pageStatus("Signin");
  const [userName, setUserNAme] = useState("");
  const [password, setPassword] = useState("");
  const [error,serError] = useState("")


  const handleUserNameChange = (e) => {
    serError('')
    setUserNAme(e.target.value);
  };
  const handlePasswordChange = (e) => {
    serError('')
    setPassword(e.target.value);
  };

  const submitHandler =  () => {
    
    if (userName === "" || password === "") {
      alert("Fill all the fields");
    } else {
      axios
      .post("http://localhost:8000/signin", {
        userName: userName,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.statusMessage === "Signin successful") {
          props.authStatus(response.data.userName)
          navigate('/');
        } else {
        //  alert('Invalid credentials or username not existed')
         serError('Invalid credentials or username not existed')
        }
      });
    }
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
          {error !== ''  && <><h6 style={{color : 'red'}}>{error}</h6><br/> </>}
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
