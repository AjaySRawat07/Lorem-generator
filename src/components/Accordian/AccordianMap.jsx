import { useEffect, useState } from "react";



export const AccordianMap = () => {

    const [accordionItems, setAccordionItems] = useState([
        { title: 'Item 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!', visible: false },
        { title: 'Item 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!', visible: false },
        { title: 'Item 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!', visible: false },
        { title: 'Item 4', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, modi. Repellat, minus illo nulla reiciendis eveniet earum cumque facere suscipit!', visible: false },
    ]);

    const [checked , setChecked] = useState(false);
    
 //  toggleVisibility -> handle visibilty
    const toggleVisibility = (index) => {
        const updatedItems = [...accordionItems];
        // accordionItem clickable functionality
        if(!checked){
            for(let i=0; i<accordionItems.length; i++){
                accordionItems[i].visible == accordionItems[i].visible;
            }
        }
        updatedItems[index].visible = !updatedItems[index].visible;
        setAccordionItems(updatedItems);
    };
 // check box change track
    useEffect(()=>{
       if(!checked){
        const updatedItem = [...accordionItems];
        for(let i=0; i<updatedItem.length; i++){
            updatedItem[i].visible = false;
        }
        setAccordionItems(updatedItem);
       }
 },[checked])
        
        // console.log(accordionItems);

    return (
        <>
            <h1 className="text-xl text-center m-2">Is multiple open accordion allowed? <input type="checkbox" value={checked} onClick={()=> setChecked(!checked)}/></h1>
            
            {accordionItems.map((item, index) => (
                <div key={index} className="w-9/12 flex flex-col items-center ml-64 mt-16 border border-black rounded">
                    <div className="text-xl flex justify-between w-9/12">
                        <span>{item.title}</span>
                    <button onClick={() => toggleVisibility(index)}>{item.visible == false? "+" : '-'}</button>
                    </div>
                    <div className={`mt-8 ${item.visible ? 'block' : 'hidden'}`}>
                        {item.content}
                    </div>
                </div>
            ))}
        </>
    );
};
