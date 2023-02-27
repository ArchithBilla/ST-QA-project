import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";




export default function Signup() {


   return (
       <div className = "signin_section">
           <div className = "sign_in_form">
        <Form>
        <Form.Group className="mb-3" >
       <Form.Label>First name</Form.Label>
       <Form.Control type="name" placeholder="Enter your first name" />
     </Form.Group>


     <Form.Group className="mb-3" >
       <Form.Label>Last name</Form.Label>
       <Form.Control type="name" placeholder="Enter your last name" />
     </Form.Group>


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


     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Confirm password</Form.Label>
       <Form.Control type="password" placeholder="Re-enter your password" />
     </Form.Group>
  
   
     <div className = "submit_button">
     <Link to = '/signin'> <Button id = "cancel_button" variant="danger">Cancel</Button></Link>
     <Button variant="primary" id='submit_button' type="submit">
       Submit
     </Button>
    
     </div>
    
    
   </Form>
   </div>
       </div>
   );
 }
 
