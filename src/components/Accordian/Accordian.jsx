import { useState } from "react";

export const Accordian = () =>{
    const [visible,setVisible] = useState(false);
    console.log(visible);
    return(
        <>
          <h1 className="text-xl text-center m-2">Is multiple open accordion allowed? <input type="checkbox"/></h1>
        <div className="w-9/12 flex flex-col items-center ml-64 mt-16 border border-black rounded">
            <div  className="text-xl flex justify-between w-9/12">
            <span>item1</span>
                <button onClick={()=> {setVisible(!visible)}}>+</button>
            </div>
            <div 
             className={`mt-8 ${visible? "none" : "hidden"}` }
             id="first"
             >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!</div>
        </div>


        <div className="w-9/12 flex flex-col items-center ml-64 mt-16 border border-black rounded">
            <div  className="text-xl flex justify-between w-9/12" id="1">
            <span>item2</span>
            <button onClick={()=>setVisible(!visible)}>+</button>
            </div>
            <div className={`mt-8 ${visible ? "none":"hidden"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!</div>
        </div>

        <div className="w-9/12 flex flex-col items-center ml-64 mt-16 border border-black rounded">
            <div  className="text-xl flex justify-between w-9/12">
            <span>item2</span>
            <button onClick={()=>setVisible(!visible)}>+</button>
            </div>
            <div className={`mt-8 ${visible ? "none":"hidden"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!</div>
        </div>

        <div className="w-9/12 flex flex-col items-center ml-64 mt-16 border border-black rounded">
            <div  className="text-xl flex justify-between w-9/12">
            <span>item2</span>
            <button onClick={()=>setVisible(!visible)}>+</button>
            </div>
            <div className={`mt-8 ${visible ? "none":"hidden"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!</div>
        </div>
        </>
    )

}