import './App.css'
import tree from "./assets/tree2.png"
import brifcase from "./assets/images-removebg-preview.png"

export default function Logo(){
    return(
        <div className="logo">
            <img className='img' src={tree} />
        <h1 className='h1'>FAR AWAY</h1>
            <img className='img' src={brifcase} alt='brifcase' />
        </div>
    )
}