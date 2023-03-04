import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export default function Signup(props) {
  props.pageStatus('Signup')
  const navigate = useNavigate();

  let [userName, setUserNAme] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setErrorMassage] = useState("");

  const handleUserNameChange = (e) => {
    setErrorMassage('')
    setUserNAme(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setErrorMassage('')
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setErrorMassage('')
    setconfirmPassword(e.target.value);
  };
  const spaceRemoval = (data) => {
    data = data.split(" ").join("");
    return data;
  };
  const submitHandler = () => {
    if (
      runTimeUsernameValidation() ||
      runTimePassWordValidation() ||
      runTimeConfirmPasswordValidation()
    ) {
      alert("Please provide valid Information");
    } else if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      userName.length
    ) {
      axios
      .post("http://localhost:8000/signup", {
        userName: userName,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === "User existed or rename the username") {
          setErrorMassage("User existed or rename the username");
        } else {
          alert("Signup is successful");
          props.authStatus(response.data.userName)
          navigate("/");
        }
      });
    } else setErrorMassage("please fill the form completely");

   
  };

  const runTimeUsernameValidation = () => {
    if (userName.length > 0 && userName.length < 8) {
      return true;
    } else return false;
  };

  const runTimePassWordValidation = () => {
    if (
      password.length > 0 &&
      !/^(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,20}$/.test(password)
    ) {
      return true;
    } else return false;
  };

  const runTimeConfirmPasswordValidation = () => {
    if (confirmPassword.length > 0) {
      if (confirmPassword === password) {
        return false;
      } else return true;
    }
  };

  const cancelHandler = ()=>{
    setUserNAme('')
    setPassword('')
    setconfirmPassword('')
  }
  return (
    <div className="signin_section">
      <div className="sign_in_form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Username"
              value={spaceRemoval(userName)}
              onChange={handleUserNameChange}
              required
              isInvalid={runTimeUsernameValidation()}
            />
            {runTimeUsernameValidation() ? (
              <Form.Text id="usernameErrormassage">
                Your username must be above 8 long.
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              value={spaceRemoval(password)}
              onChange={handlePasswordChange}
              required
              isInvalid={runTimePassWordValidation()}
            />
            {runTimePassWordValidation() ? (
              <Form.Text id="usernameErrormassage">
                Password must contain atleast 8 characters includining atleast
                one uppercase, lowercase and special charecter.
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter your password"
              value={spaceRemoval(confirmPassword)}
              onChange={handleConfirmPasswordChange}
              required
              isInvalid={runTimeConfirmPasswordValidation()}
            />
            {runTimeConfirmPasswordValidation() ? (
              <Form.Text id="usernameErrormassage">
                Please confirm your password.
              </Form.Text>
            ) : null}
          </Form.Group>
          {error !== ''  && <><h6 style={{color : 'red'}}>{error}</h6><br/> </>}


          <div className="submit_button">
              <Button id="cancel_button" variant="danger" onClick={cancelHandler}>
                Cancel
              </Button>
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
