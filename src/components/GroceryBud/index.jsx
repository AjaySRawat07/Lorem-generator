import React, { useEffect, useState } from 'react';
import { Toaster, toast } from "sonner";

function GroceryBud() {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);

    // for handle click
    function handleClick(text) {
        if (text != "") {
            setData(prev => [...prev, { id: Date.now(), text, checkbox: false }]);
            setText("");

            toast.success("item added in list", {
                theme: "colored",
                duration: 2000
              })
        } else {
            toast.error("please text value", { duration: 3000 }, );
        }
    }

    // handlecheck for check data 
    function handleCheck(id) {
      setData(prevData => prevData.map((checkData) =>
        checkData.id === id ? {...checkData, checkbox: !checkData.checkbox} : checkData)
    )
    }

    const removeItem = (id) => {
      const updatedList = data.filter((item) => item.id !== id);
      setData(updatedList);
        // local storage remove data
    //   localStorage.setItem("localKey", JSON.stringify(updatedList));

    toast.success("deleted" ,{duration : 2000});
    }
    
    useEffect(() => {
        const storeState = localStorage.getItem("localKey");
        if (storeState) {
            setData(JSON.parse(storeState));
        }
    }, []);
    
    useEffect(()=>{
        const storeState = localStorage.getItem("localKey");
        if (storeState?.length > 0) {
            localStorage.setItem("localKey", JSON.stringify([...JSON.parse(storeState), ...data]));
        } else {
            localStorage.setItem("localKey", JSON.stringify(data));
        }
    },[data])

    return (
        <div className='h-screen'>
            <Toaster position="top-center" expand={true} richColors visibleToasts={18} closeButton />
            <h1 className='text-center mt-10 mb-6 text-4xl'>Grocery Bud</h1>
            <div className='flex justify-center m-4 ml-20'>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}
                    className='border border-black rounded px-8'
                />
                <button 
                    onClick={() => handleClick(text)}
                    className='m-2 border border-black rounded px-4 py-2 bg-sky-400 '
                >Add Item</button>
            </div>
            <div className='flex justify-center gap-2 flex-col items-center text-lg'>
                {data.map((data) => (
                    <div  className='flex justify-between gap-2 w-1/5 p-2' key={data.id}>
                        <input  type='checkbox' 
                            onClick={() => handleCheck(data.id)}/>
                        <p className={`bg-blue-300 px-4 py-1 ${data.checkbox == true ? 'line-through': 'none' }`}>{data.text}</p>
                        <button 
                            className='bg-teal-400 p-1 rounded'
                            onClick={() => {removeItem(data.id)}}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroceryBud;