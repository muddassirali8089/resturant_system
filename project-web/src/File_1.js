import { useState } from "react";
import File_2 from "./file_2";

function File_1() {

    const[data , setdata] = useState(
        [
            {id : 1 , name : "ali"},
            {id : 1 , name : "khan"}
        ]
    );
    return (  

        <File_2  dt = {data}/>
    );
}

export default File_1;