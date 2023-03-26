import Navigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  const [page, setPage] = useState('')
  const [authUser,setauthUser] = useState('')

const pageStatus = (data)=>{
  setPage(data)
}
const authStatus = (data)=>{
  setauthUser(data)
}

console.log(authUser)

 return (
   <>
  <Navigation page = {page} authUser = {authUser} authStatus = {authStatus}/>
  <Routes>
  <Route path={'/'} element={<Home pageStatus = {pageStatus} authUser = {authUser} />}></Route>
  <Route path="signin" element={<Signin pageStatus = {pageStatus} authStatus = {authStatus} />} />
  <Route path="signin/signup" element={<Signup pageStatus = {pageStatus} authStatus = {authStatus}/> } />
  </Routes>
  </>
 );
}





