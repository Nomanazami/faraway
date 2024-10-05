import "./App.css"
import { useState } from "react";

export default function Form({itemList,setItemList}){

const [inputText,setInputText] = useState("");
const [itemNumber,setItemNumber] = useState(0);

const addHandler = ()=> {
    console.log(inputText,itemNumber,"==>>inputText");
   const myList = [...itemList];
   myList.push({
    inputText,
    itemNumber,
});
    setItemList(myList)
    
} ;
    let arr =[1,2,3,4,5,6,7,,9,10]
    return(
        <div className="form">
            {/* {pargraph} */}
        <p>What do you need for your 😍 trips</p>
        <div className="btn">

            {/* {select} */}
        <select className="btn" onChange={(e)=> setItemNumber(e.target.value)
        }>
          
            {arr.map((elem) =><option>{elem}</option> )}
        </select>

        </div>

        {/* {input} */}
        <input onChange={(e)=> setInputText(e.target.value)}
         className="btn" placeholder="  Item..." value={inputText} />
         {/* {button} */}
        <button onClick={addHandler} className="blue">ADD</button>
        </div>
    )
}