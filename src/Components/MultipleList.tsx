import React, {useState} from 'react'

const defaultItems:{id:number, name:string}[] =[
    {id: 1, name:"ghee"},
    {id: 2, name:"Oil"},
    {id: 3, name:"Rice"},
    {id: 4, name:"Sugar"},
    {id: 5, name:"Wheat"}
];

export const MultipleList = () => {
    const [items, setItems] = useState(defaultItems);

    const addItems = () =>{
        const item = defaultItems.find((i)=>!items.includes(i));
        if(item){
            setItems([...items, item]);
        }
    };

    const removeItems = (item:any) =>{
        setItems(items.filter((i)=> i !==item));        
    }
    return (
        <div>
            <ul style={{listStyle:"none", paddingLeft:0}}>
                {items.map((data, index)=>
                    <li key={index}>
                        <input type="text" value={data.id +". "+ data.name}/>
                        <button onClick={()=>removeItems(data)}>Remove</button>
                    </li>)}
            </ul>
            <button onClick={addItems}>Add Item</button>
        </div>
        
    )
}
