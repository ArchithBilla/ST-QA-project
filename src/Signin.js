import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";




export default function Signin() {


   return (
       <div className = "signin_section">
           <div className = "sign_in_form">
        <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
       <Form.Text className="text-muted">
         We'll never share your email with anyone else.
       </Form.Text>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     <Form.Text className="text-muted">
         Don't have an accout?   
       </Form.Text>
       <Button className = "signup_button" variant="link"> <Link to = 'signup'>Sign up</Link></Button>
  
     <div className = "submit_button">
     <Link to = '/'> <Button id = "cancel_button" variant="danger">Cancel</Button></Link>
     <Button variant="primary" id='submit_button' type="submit">
       Submit
     </Button>
    
     </div>
   </Form>
   </div>
       </div>
   );
 }
 
