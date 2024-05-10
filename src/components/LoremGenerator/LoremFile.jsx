import { useState } from "react";
import Paras from "./data";


const Generator = () =>{
    const [value,setValue]  = useState("");
    const [arr, setArr]  = useState([]);
    function handleClick(value){
        if(value >= 9 || value < 0){
            alert("!oops you cross the limit😫")
        }else{
         setArr([""])
        for(let i=0; i<value; i++){
            setArr((prevArr)=> [...prevArr,Paras[i]]);
        }
    }
    }
    return(
        <div className="text-center m-4 text-3xl">
         <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className="flex justify-center gap-3 m-4 text-xl">
        <p> Paragraphs <input type="number" min={-10} max={10} className="border border-black rounded" onChange={(e)=> setValue(e.target.value)} /></p>
        <button className="border border-black rounded bg-sky-400 px-2"
            onClick={() => handleClick(value)}
        >Generate</button>
        </div>

        <div className="m-4  bg-orange-200 flex flex-col justify-center items-center ">
        <div className="w-9/12 p-4">
            {arr.map((para,index)=> <p
            className="m-4 text-lg" key={index}>{para.paragraph}</p> )}
        </div></div>
        
        </div>
    )
}

export default Generator;