
import {useState} from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const[result, setResult] = useState("");

  const operations = ['/', '*', '+', '-', '.'];

  //update calculator preview
  const updateCalc = value => {
    if(
      operations.includes(value) && calc === '' || operations.includes(value) && operations.includes(calc.slice(-1))   ) {
        return;
      }

    setCalc(calc + value);

    if(!operations.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  //create digits from one to nine:
  const create_digits = () => {
    const digits = [];
    for(let i = 1; i < 10; i++){
      digits.push(
        <button onClick = {() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  //calculate when '=' button is pressed:
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  //DEL function, deletes last character
  const deleteLast = () => {
    if(calc == '') {
      return;
    }
    const value = calc.slice(-0, -1);
    setCalc(value);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header-wrapper">
          <a href="index.html"><div className="logo">
            <img src="./favicon.ico"  /> <p>React Calculator</p>
          </div></a>
          <nav className="nav">
            <a href="index.html">Home</a>
            <a href="index.html">About</a>
            <a href="https://github.com/josippr" target="_blank">GitHub</a>
          </nav>
        </div>
      </div>
      
      <div className="calculator">
        <div className="display">
           {result ? <span>({result})</span> : ''} 
           {calc || "0" }
        </div>
        <div className="operators">
          <button onClick = {() => updateCalc('/')}>/</button>
          <button onClick = {() => updateCalc('*')}>*</button>
          <button onClick = {() => updateCalc('+')}>+</button>
          <button onClick = {() => updateCalc('-')}>-</button>
          <button onClick = {deleteLast}>DEL</button>
        </div>
        <div className="digits">
          { create_digits() }
          <button  onClick = {() => updateCalc('0')}>0</button>
          <button  onClick = {() => updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>

      <div className="about">
        <div className="about-wrapper">
          <div class="item">
            <p>This project was developed with <a className="ft-a" href="https://reactjs.org/" target="_blank">#ReactJS</a> framework, following the tutorial from <br /><a href="" target="_blank">#Tyler Potts</a> on YouTube. The code is open-source, and is available on <a href="https://github.com/josippr" target="_blank">#GitHub.</a></p>
            <br/>
            <br/>
            <p>Copyright &copy;<a href="https://github.com/josippr" target="_blank">Josip Prpić</a> 2022 <br/> All rights reserved.</p>
          
          </div>
          <div className="gh-icon">
            <img src="./logo512.png" height="300px;"></img>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;






















































//end of file