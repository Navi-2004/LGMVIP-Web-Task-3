import './App.css';
import React,{useState} from 'react';

function App() {

  const[result,setResult]=useState("")

  const handleCLick = (e) =>{
    setResult(result.concat(e.target.name));
  }
  
  const clear =() => {
    setResult("");
  }
  const backspace = () => {
     setResult(result.slice(0,result.length -1))
  }

  const calculate = () => {
    try{
    setResult(eval(result).toString()); 
    
  }
  catch(err){
    setResult("Error");
  }
}

  return (
  <>
  <div className='container'>
    <form>
      <input type="text" value={result} />
    </form>
    <div className='keypad'> 
    <button onClick={clear} className='highlight' id="clear"> Clear</button>
    <button onClick={backspace} className='highlight' id="backspace">C</button>
    <button name="/"  onClick={handleCLick} className='highlight'>&divide;</button>
    <button name="7" onClick={handleCLick}>7</button>
    <button name="8" onClick={handleCLick}>8</button>
    <button name="9" onClick={handleCLick}>9</button>
    <button name="*" onClick={handleCLick} className='highlight'>&times;</button>
    <button name="4" onClick={handleCLick}>4</button>
    <button name="5" onClick={handleCLick}>5</button>
    <button name="6" onClick={handleCLick}>6</button>
    <button name="-" onClick={handleCLick} className='highlight'>&ndash;</button>
    <button name="1" onClick={handleCLick}>1</button>
    <button name="2" onClick={handleCLick}>2</button>
    <button name="3" onClick={handleCLick}>3</button>
    <button name="+" onClick={handleCLick} className='highlight'>+</button>
    <button name="0" onClick={handleCLick}>0</button>
    <button name="." onClick={handleCLick} >.</button>
    <button onClick={calculate} id="result" className='highlight'>=</button>
   



    </div>

  </div>
  </>
  );
}

export default App;
