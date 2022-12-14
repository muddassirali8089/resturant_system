import '../CSSS/RegistrationForm.css';
import NavBar from './NavBar';
import { useRef, useState } from 'react';
function RegistrationForm() {

const ref=useRef();

const [firstname , setFirstName] = useState("");

const [lastname , setlastName] = useState("");

const [email , setEmail] = useState("");

const [phonenum , setPhoneNum] = useState();

const [adress1 , setAdress1] = useState("");
const [adress2 , setAdress2] = useState("");



const onSubmit = (event) =>{
event.preventDefault();

console.log(ref.current.value);


}

const handleChange = (e) =>{
  
  if(e.currentTarget.name === "firstname"){
    const fn = e.currentTarget.value;
    setFirstName(fn);
    console.log(firstname)
    
  }
  else if(e.currentTarget.name === "lastname"){

    const ln = e.currentTarget.value;
    setlastName(ln);
    console.log(lastname);
  }

  else if(e.currentTarget.name === "email"){
    const email = e.currentTarget.value;
    setEmail(email);
    console.log(email);

  }
  else if(e.currentTarget.name === "phonenum"){


    const phonenum = e.currentTarget.value;
    setPhoneNum(phonenum);
    console.log(phonenum);
  }

  else if(e.currentTarget.name === "adreess1"){


    const adress1 = e.currentTarget.value;
    setAdress1(adress1);
    console.log(adress1);
  }

  else if(e.currentTarget.name === "adreess2"){


    const adress2 = e.currentTarget.value;
    setAdress2(adress2);
    console.log(adress2);
  }
  


 
}

    return (  
      
      <div id="RegistrationForm">

      
        
 <form  onSubmit={onSubmit}>
   <div class="form-group col-md-6">
     <label for="formGroupExampleInput">First Name</label>
     <input    onChange={handleChange}  name = "firstname" value={firstname} type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name" ref={ref}/>
   </div>
   <div class="form-group col-md-6">
     <label for="formGroupExampleInput2">Last Name</label>
     <input  onChange = {handleChange} name = "lastname" value={lastname} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
   </div>
 
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputEmail4">Email</label>
       <input onChange={handleChange} name = "email" value ={email} type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
     </div>
     <div class="form-group col-md-6">
       <label for="phone">Phone number</label>
       <input  onChange={handleChange} name = "phonenum" value = {phonenum} type="number" class="form-control" id="phone" placeholder="Phone Number"/>
     </div>
   </div>
   <div class="form-group">
     <label for="inputAddress">Address</label>
     <input  onChange={handleChange} name = "adreess1" value = {adress1} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
   </div>
  <div class="form-group">
     <label for="inputAddress2">Address 2</label>
     <input  onChange={handleChange} name = "adreess2" value = {adress2} type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
   </div>
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState"> Select State</label>
      <select id="inputState" class="form-control">
        <option selected>KPK</option>
        
       <option >Punjab</option>
       <option >Sindh</option>
        <option >Baluchistan</option>
        
       </select>
   </div>
   <button type="submit" class="btn btn-dark  " id="btn" style={{marginLeft : "10vw"}}>Register</button>
  
    </div>
 
    
 </form>

 </div> // maindiv

    );
}

export default RegistrationForm;