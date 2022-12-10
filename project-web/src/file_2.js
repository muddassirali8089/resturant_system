function File_2(prop) {
    return ( 
       <div>

       
            {
            
            prop.dt.map((d) => (
                <div>

                <h1>ID: {d.id}</h1>
                <h1>ID: {d.name}</h1>
               </div>
            ))
         }
        </div>
     );
}

export default File_2;