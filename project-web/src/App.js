
import RegistrationForm from "./component/RegistrationForm";
 import Signinform from "./component/Signinform";
//  import NavBar from "./component/NavBar";
// import HomePage from "./component/HomePage";
 import Menu from "./component/Menu";
 import { Route, Routes } from "react-router-dom";
// import SpecialDeals from "./component/SpecialDeals";
 import ContuctUs from "./component/ContuctUs";
// import Admin from "./component/Admin";

import HomepageGrid from "./component/HomepageGrid";
import NavBar from "./component/NavBar";


function App() {
  
  return(

<div>




<NavBar/> 
  <Routes>

  <Route path="/" element={<HomepageGrid />}></Route>
  <Route path="Menu" element ={<Menu/>}></Route>
  <Route path="ContuctUs" element = {<ContuctUs/>}></Route> 
  <Route path="/signup" element={<RegistrationForm/>}></Route>

  <Route path="/Signinform" element={<Signinform/>}></Route>


  {/* <Route path="Admin" element={<Admin/>}> </Route>

<Route path = "SpecialDeals" element = {<SpecialDeals/>}></Route>
*/}


 



</Routes>
  
  </div>
   
);

  

}

export default App;
