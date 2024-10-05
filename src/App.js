
import './App.css';
import Logo from "./Components/Logo"
import Form from "./Components/Form"
import PackagingList from "./Components/PackagingList"
import Stats from "./Components/Stats"
import { useState } from 'react';


function App() {

  const [itemList,setItemList]= useState([]);

  return (
    <div className='App'>
    {/* logo */}
    <Logo/>
    {/* form */}
   <Form itemList={itemList} setItemList={setItemList} />
   {/* PackagingList */}
   <PackagingList itemList={itemList} setItemList={setItemList} />
   {/* Stats */}
   <Stats/>
    </div>
  )
 
}

export default App;
