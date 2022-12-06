import { useState } from 'react';
import '../CSSS/Signinform.css'
import NavBar from './NavBar';
function Signinform() {

 const [email , setEmail] = useState("");
 const [password , setPassword]=useState("");

  

const HandleSubmit = (e) =>{

  e.preventDefault(); // it will convert the default behavior of button
  console.log("Submitted..");

}

const handleEmailChange = (e) =>{

const newemail = e.currentTarget.value;
setEmail(newemail);

}

const handlePasswardChange = (e) =>{
const newpassword=e.currentTarget.value;
setPassword(newpassword);

}





    return (  

      
        
      <div id="Signinform">

      
      <form onSubmit={HandleSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label "><b>Email Address</b> </label>
            <input placeholder='Email'  onChange={handleEmailChange}
             value ={email} 
             type="email" 
              class="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-label"> We'll never share your email with anyone else.</div>
          </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b>Password</b></label>
            <input placeholder='Password' onChange={handlePasswardChange} value= {password} type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
           
          </div>
          <button type="submit" class="btn btn-dark">SignIn</button>
     </form>

      {email}
      {password}


     </div>



    );
}

export default Signinform;