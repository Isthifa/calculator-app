import React,{useState} from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    switch(e.target.name){
      case "clear":
        setResult("");
        break;
      case "c":
        setResult(result.slice(0, -1));
        break;
      case "=":
        try{
          setResult(eval(result).toString()); //eval is a function that evaluates the string and returns the result of the expression in the string
        }catch(err){
          setResult("Error");
        }
        break;
      default:
        setResult(result.concat(e.target.name));
        break;
    }
  }
    //

    // if(e.target.name === "clear"){
    //   try{
    //     setResult("");
    //   }catch(err){
    //     setResult("Error");
    //   }}else if(e.target.name === "c"){
    //     try{
    //       setResult(result.slice(0, -1));
    //     }catch(err){
    //       setResult("Error");
    //     }}else if(e.target.name === "="){
    //       try{
    //         setResult(eval(result).toString()); //eval is a function that evaluates the string and returns the result of the expression in the string 
    //         //eval evaluates math expressions in strings and returns the result of the expression in the string
    //       }catch(err){
    //         setResult("Error");
    //       }}
    //     else{
    //   try{
      //   setResult(result.concat(e.target.name));
      // }catch(err){
      //   setResult("Error");
      //   }}
      // }

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="buttons" onClick={handleClick}>
        <button name="clear" id="clear">Clear</button>
        <button name="c" id="back">c</button>
        <button className="operator" name="/" >&divide;</button>
        <button name="7" >7</button>
        <button name="8" >8</button>
        <button name="9" >9</button>
        <button className="operator" name="*">&times;</button>
        <button name="4" >4</button>
        <button name="5" >5</button>
        <button name="6" >6</button>
        <button className="operator" name="-">&ndash;</button>
        <button name="1" >1</button>
        <button name="2" >2</button>
        <button name="3" >3</button>
        <button name="+" className="operator">+</button>
        <button className="zero" name="0">0</button>
        <button name="." >.</button>
        <button name="=" id="equal">=</button>
      </div>
    </div>
  )
}

export default App;