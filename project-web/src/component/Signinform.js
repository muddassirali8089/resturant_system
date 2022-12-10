import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../CSSS/Signinform.css'

function Signinform() {

 const [email , setEmail] = useState("");
 const [password , setPassword]=useState("");

  const navigate  = useNavigate();

const HandleSubmit = (e) =>{

  e.preventDefault(); // it will convert the default behavior of button
  
  console.log(email , password);
  if(!email || !password){
    alert("enter valid email");
  } ;
  if(email=== "ali@gmail.com" || password ==="123"){
navigate('/');
  }
   

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
          <div id=''>

          <button type="submit" class="btn btn-dark" >SignIn</button>
          </div>
          <button type="submit" class="btn btn-dark" style={{marginLeft: "380px" , marginTop:"-65px"  , fontSize:".7vw"}}>Forget password</button>

          
     </form>

      {email}
      {password}


     </div>



    );
}

export default Signinform;