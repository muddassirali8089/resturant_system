import { useState } from "react";
import"../CSSS/homepageright.css"
const HomePageRight = () => {
    
    const[leftimg , setleftImg] = useState([

        {id : "1" ,count:0, Name : "Veggie Pizza" ,  price : " RS : 600" ,image : <img src={require('../homeimg/01.jpg')} alt="nolodead" style = {{height: "89vh" , width : " 20vw"}}/>} ,
        {id : "2" ,count:0, Name : "Cheese Pizza" ,   price : " RS : 550" ,image : <img src={require('../homeimg/location.PNG')} alt="nolodead" style = {{height: "89vh" , width : " 20vw"}}/>} 
        
    ]);
    
    return ( 
        
       <div id = "mainright">

        {
            leftimg.map((leftimg) =>(
                <div id=" cards"> 
                <div className="card-body">
         {/* <h5 className="card-title">{leftimg.id} </h5>  */}
       
      <div style={{margin: "10px"}}>

        <p > {leftimg.image}</p>

        </div>
        </div>


                </div>

            ))
        }

       </div>
        
     );
}
 
export default HomePageRight;