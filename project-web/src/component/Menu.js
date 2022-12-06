import "../CSSS/Menu.css"
import {useState} from "react";

const Menu = () => {



    const[piza , setPiza] = useState([

        {id : "1" ,count:0, Name : "Veggie Pizza" ,  price : " RS : 600" ,image : <img src={require('../pizaimages/img1.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "2" ,count:0, Name : "Cheese Pizza" ,   price : " RS : 550" ,image : <img src={require('../pizaimages/img2.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "3" ,count:0, Name : "Pepperoni Pizza" ,  price : " RS : 600" ,image : <img src={require('../pizaimages/img3.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "4" ,count:0, Name : "Meat Pizza" ,  price : " RS : 650" ,image : <img src={require('../pizaimages/img4.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "5" ,count:0, Name : "Margherita Pizza" , price : " RS : 700" , image : <img src={require('../pizaimages/img5.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "6" ,count:0, Name : "Chicken Pizza" , price : " RS : 600" , image : <img src={require('../pizaimages/img6.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "7" ,count:0, Name : "Hawaiian Pizza" , price : " RS : 650" , image : <img src={require('../pizaimages/img7.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>},
        {id : "8" ,count:0, Name : "Buffalo Pizza" , price : " RS : 550" , image : <img src={require('../pizaimages/img8.jfif')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>}
       
       
       
       
      
 
        
    ]);



    const[burgers , setBurgers] = useState([

        {id : "1" ,count:0, Name : "meat burger" ,  price : " RS : 250" ,image : <img src={require('../burgerimges/burger_0.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "2" ,count:0, Name : "Cheeseburger" ,   price : " RS : 250" ,image : <img src={require('../burgerimges/cheeseburger.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "3" ,count:0, Name : "Bean burger" ,  price : " RS : 250" ,image : <img src={require('../burgerimges/chickpea_burger.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "4" ,count:0, Name : "Elk burger" ,  price : " RS : 300" ,image : <img src={require('../burgerimges/elk.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "5" ,count:0, Name : "mushroom burger" , price : " RS : 350" , image : <img src={require('../burgerimges/mushroom_burger.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "6" ,count:0, Name : "salmon burger" , price : " RS : 350" , image : <img src={require('../burgerimges/salmon_burger.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "7" ,count:0, Name : "Turkey burger " , price : " RS : 650" , image : <img src={require('../burgerimges/Turkey_burger.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>},
        {id : "8" ,count:0, Name : "Veggie burger" , price : " RS : 550" , image : <img src={require('../burgerimges/vegie_burger.jpg')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} 
       
       
      
 
        
    ]);



    const[milkshakes , setmilkshake] = useState([

        {id : "1" , Name : "Apple" ,  price : " RS : 150" ,image : <img src={require('../milkshakeimg/apple.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "2" , Name : "Bluebarry" ,   price : " RS : 150" ,image : <img src={require('../milkshakeimg/bluebary.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "3" , Name : "Chocomalt" ,  price : " RS : 130" ,image : <img src={require('../milkshakeimg/chocmalt.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "4" , Name : "CoolMint" ,  price : " RS : 180" ,image : <img src={require('../milkshakeimg/cool_Mint.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "5" , Name : "strabery" , price : " RS : 170" , image : <img src={require('../milkshakeimg/strabery.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "6" , Name : "vanila" , price : " RS : 150" , image : <img src={require('../milkshakeimg/vanila.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} ,
        {id : "7" , Name : "Mango" , price : " RS : 120" , image : <img src={require('../milkshakeimg/mango.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>},
        {id : "8" , Name : "Banana" , price : " RS : 140" , image : <img src={require('../milkshakeimg/banana.webp')} alt="nolodead" style = {{height: "20vh" , width : " 10vw"}}/>} 
       
       
      
 
        
    ]);
   

    const del = (ID) =>{

setPiza(

  piza.filter((piza) => piza.id!==ID )
)

    }
    return ( 
<div>
       


<div id="main">

    
<div id="nav2">
            <h1>Pizza</h1>
        </div>
        
        {
             piza.map((piza) => (
                
               
  
  
    <div className="card" id = "cards">
      <div className="card-body">
        <h5 className="card-title">{piza.id} {piza.Name}</h5>
       <p> {piza.price} </p>
      
        <p > {piza.image}</p>
        
        <div id="button">
        <button className="btn btn-dark" onClick={() => del (piza.id)}>Add to card</button>
        <button className="btn btn-dark" style={{marginLeft:"10px"}}>-</button>
        <p style={{paddingTop:"10px"}} >{piza.count }</p>
        <button className="btn btn-dark">+</button>
        
          </div>
      </div>
    </div>

 

              
                
             ))
          }
        

        </div>
       

        <div id="main">
        <div id="nav2">
            <h1>Burgers</h1>
        </div>
        {
             burgers.map((burger) => (
                
               
  
  
    <div className="card" id = "cards">
      <div className="card-body">
        <h5 className="card-title">{burger.id} {burger.Name}</h5>
       <p> {burger.price} </p>
      
        <p > {burger.image}</p>
        <button className="btn btn-dark">Order</button>
      </div>
    </div>

 

              
                
             ))
          }
        
        </div>
       
        



        <div id="main">
        <div id="nav2">
            <h1>Milk shakes</h1>
        </div>
        {
             milkshakes.map((milkshake) => (
                
               
  
  
    <div className="card" id = "cards">
      <div className="card-body">
        <h5 className="card-title">{milkshake.id} {milkshake.Name}</h5>
       <p> {milkshake.price} </p>
      
        <p > {milkshake.image}</p>
        <button className="btn btn-dark">Order</button>
      </div>
    </div>

 

              
                
             ))
          }
        
        </div>

        
        </div> 
        // main div 
     );
}

export default Menu;