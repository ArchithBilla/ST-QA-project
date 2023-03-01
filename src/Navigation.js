import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";




export default function Navigation(props) {
let isUserVerified = false
   return (
    <>
    <Navbar bg="dark" variant="dark"  sticky="top">
    <Link to = '/' id='logo_link'>  <h2 className='logoTitle'>J NEWS</h2></Link>
       <Container>
           <div className = "signinButton">
     {props.page === 'Home' ?  (<Link to = 'signin'> <Button variant="outline-info">{isUserVerified ?  "Sign out" : "Sign in" } </Button>{' '}</Link>) : null }
       </div>
       </Container>
     </Navbar>
   </>
   );
 }
 
