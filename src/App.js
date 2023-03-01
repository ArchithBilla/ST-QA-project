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
const pageStatus = (data)=>{
  setPage(data)
}
 return (
   <>
  <Navigation page = {page}/>
  <Routes>
  <Route path={'/'} element={<Home pageStatus = {pageStatus} />}></Route>
  <Route path="signin" element={<Signin pageStatus = {pageStatus}/>} />
  <Route path="signin/signup" element={<Signup pageStatus = {pageStatus}/> } />
  </Routes>
  </>
 );
}





