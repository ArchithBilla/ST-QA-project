import Navigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
 // const [path, setPath] = useState("/");


 // const findPath = (pathName)=>{
 //   setPath(pathName)
 // }
// console.log(path)
 return (
   <>
  <Navigation />
  <Routes>
  <Route path={'/'} element={<Home />}></Route>
  <Route path="signin" element={<Signin />} />
  <Route path="signin/signup" element={<Signup/> } />
  </Routes>
  </>
 );
}





