import { clear } from '@testing-library/user-event/dist/clear';
import './App.css'
import { useState } from 'react';

export default function PackagingList  ({itemList,setItemList}){


   const clearHandler =()=>{
    // console.log("kia hoa" );
    setItemList([]);
   }
  
    let arr = [1,2,3,4,5]
    return(
        <div className='packaging'>
            <div className="itemList">
                {itemList.map((item)=>(
                <ItemList item={item} />
                ))}
</div>
      <div>
                <select className="clrbtn" >
                {["sort by inpur order","palce by order"].map((elem)=> <option>{elem}</option>
            )}
            </select>
            <button onClick={clearHandler} className="clrbtn">Clear List</button>
            </div>
        </div>
    );
};

function ItemList({item}){
    return(
        <div className='item' >
            <input type="checkbox"/>
            <p>{item.itemNumber}</p>
            <p>{item.inputText}</p>
            <button>❌</button>
          
        </div>
    );
};
