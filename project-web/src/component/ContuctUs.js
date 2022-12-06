
import '../CSSS/ContuctUs.css'
function ContuctUs() {
    return (  
        <div>
            <div  id="contuctus" >
  <             div class="card-body" style={{height : "35vh" , marginTop:"13.5vh"}} >
                <h5 class="card-title"><h1>Contuct Us</h1></h5>
                <p class="card-text"><h4>PHONE NUMBER +923305375289 </h4></p>
                <p class="card-text"><h5>Email : muddassirali8089@gmail.com</h5></p>
                <p class="card-text"><h6> Adress :Jadoon Plaza Phase 1، Karakoram Highway، Abbottabad, Khyber Pakhtunkhwa 22010</h6></p>
                
                </div>
  <img style={{height : "200px"}}src={require('../CSSS/contuctusimg.jpg')} class="card-img-bottom" alt="..."/>
</div>
            
        </div>
    );
}

export default ContuctUs;