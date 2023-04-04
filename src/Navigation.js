import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {  Link, } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import { useState, useEffect } from "react";


export default function Navigation(props) {
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   setData(props.aipData)
  // },[])
  let pageCondition = props.page === "Signin" ||  props.page === "Signup"
let isUserVerified = props.authUser === ''? false : true
   return (
    <>
          <Row>
    <Navbar bg="dark" variant="dark"  sticky="top">
        <Col xs = {3}>
    <Link to = '/' id='logo_link'>  <h3 className='logo_link' style ={{marginLeft: "21px"}}>J NEWS</h3></Link>
    </Col>
   
    {/* {Object.keys(data).map((item)=>{
          console.log(item,'---',props.aipData)
          return (
            <Col xs = {1}>
          <Nav variant="pills" defaultActiveKey="link-3">
          <Nav.Item>
              <Nav.Link eventKey={item} >{item}</Nav.Link>
            </Nav.Item>
            </Nav>
            </Col>
          )
        })} */}
        <Col xs = {2}>
       <Container>
        
           <div className = "signinButton">
     {pageCondition === false ? ( isUserVerified ?<Link  style = {{textDecoration : 'none'}}to = '/'> <Button variant="outline-info" onClick = {(()=>{
                alert('Do you really want to sign out')
                props.authStatus('')

     })}>{ "Sign out" } </Button> <h6 className="userName"> {props.authUser !== '' && `Hello ${props.authUser}`}</h6>{' '}</Link> :<><Link to='signin'> <Button variant="outline-info">{"Sign in"} </Button>{' '}</Link></>):null }<br/>
       </div>
       
       </Container>
       </Col>
     </Navbar>
     </Row>

   </>
   );
 }
 
