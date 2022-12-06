import '../CSSS/RegistrationForm.css';
import NavBar from './NavBar';
function RegistrationForm() {
    return (  
      
      <div id="RegistrationForm">

      
        
 <form>
   <div class="form-group col-md-6">
     <label for="formGroupExampleInput">First Name</label>
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"/>
   </div>
   <div class="form-group col-md-6">
     <label for="formGroupExampleInput2">Last Name</label>
     <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
   </div>
 
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputEmail4">Email</label>
       <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
     </div>
     <div class="form-group col-md-6">
       <label for="phone">Phone number</label>
       <input type="tel" class="form-control" id="phone" placeholder="Phone Number"/>
     </div>
   </div>
   <div class="form-group">
     <label for="inputAddress">Address</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
   </div>
  <div class="form-group">
     <label for="inputAddress2">Address 2</label>
     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
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