import {  useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../CSSS/Signinform.css'

function Signinform() {

//  const [email , setEmail] = useState("");
//  const [password , setPassword]=useState("");

  const navigate  = useNavigate();
  const inputt = useRef(null);
  const inputt2 = useRef(null);

  const onclick = () =>{
    if (!inputt.current.value &&  inputt2.current.value){
return;
    }
    else if(inputt.current.value ==="ali@gmail.com" &&  inputt2.current.value ==="123"){
      navigate('/');
        }
    
  }
const handleSubmit = (e) =>{

  e.preventDefault(); // it will convert the default behavior of button
 
  
 
  



   

}









    return (  

      
        
      <div id="Signinform">

      
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label "><b>Email Address</b> </label>
            <input placeholder='Email'   ref ={inputt}
             
             type="email" 
              class="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-label"> We'll never share your email with anyone else.</div>
          </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b>Password</b></label>
            <input placeholder='Password'  ref ={inputt2} type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
           
          </div>
          <div id=''>

          <button type="submit" class="btn btn-dark" onClick={onclick}>SignIn</button>
          </div>
          <button type="submit" class="btn btn-dark" style={{marginLeft: "380px" , marginTop:"-65px"  , fontSize:".7vw"}}>Forget password</button>

          
     </form>

      


     </div>



    );
}

export default Signinform;