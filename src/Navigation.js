import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";

export default function Navigation(props) {
  let pageCondition = props.page === "Signin" ||  props.page === "Signup"
let isUserVerified = props.authUser === ''? false : true
   return (
    <>
    <Navbar bg="dark" variant="dark"  sticky="top">
    <Link to = '/' id='logo_link'>  <h2 className='logoTitle'>J NEWS</h2></Link>
       <Container>
           <div className = "signinButton">
     {pageCondition === false ? ( isUserVerified ?<Link to = '/'> <Button variant="outline-info" onClick = {(()=>{
                alert('Do you really want to sign out')
                props.authStatus('')

     })}>{ "Sign out" } </Button>{' '}</Link> :<Link to = 'signin'> <Button variant="outline-info">{ "Sign in" } </Button>{' '}</Link>):null }<br/>
       </div>
       <h6 className = "userName"> {props.authUser !== '' && `Hello ${props.authUser}`}</h6>

       </Container>
     </Navbar>
   </>
   );
 }
 
