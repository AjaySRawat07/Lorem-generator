import { useState } from "react";

const Planner  = () =>{
    const [state,setState] = useState([]);
    const [text,setText] = useState("");
    const [time, setTime] = useState("");

    function handleClick(text,time){
        setState([...state, 
            {
              id:Date.now(), text , time 
            }])
    }

    function incrementTime(id){
        setState(prevState => prevState.map(data=>
            data.id === id ? {...data,time:data.time+1} : data)
        )
    }
    
    function decrementTime(id){
        setState(prevState => prevState.map(data => data.id === id && data.time > 0? {...data,time:data.time-1}:data)
        )
    }
    
    return(
        <div className="text-center mt-64">
            <h1 className="m-4 text-3xl font-semibold">Geekster Education Planner</h1>
            <div className="m-2">
                <input 
                type="text" onChange={(e)=> setText(e.target.value)} value={text}
                className="border border-black mx-2 rounded-md" placeholder="text here"/>
                <input  value={time}
                type="number" min={0} max={100} onChange={(e)=> setTime(e.target.value)}
                className="border border-black mx-2 rounded" placeholder="Hour" />
                <button 
                className="border border-red mx-2 rounded p-2" onClick={()=>handleClick(text,time)}>Add Btn</button>
            </div>
            <ul>
                {state.map((data)=> (
                    <ul className="flex justify-center items-center gap-2 my-4">
                        <li key={data.id}  className="border border-black rounded px-2"> {data.text}</li>
                        <li key={data.id} className="border border-black rounded px-2">{data.time}time</li>
                        <p 
                        className="border border-black px-2 rounded-lg"
                        onClick={()=>incrementTime(data.id)}
                        >➕</p>
                        <p 
                        className="border border-black px-2 rounded-lg"
                        onClick={()=>decrementTime(data.id)}
                        >➖</p>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

export default Planner;