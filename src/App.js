import React,{useState} from 'react';
import logo from './logo.svg';
import './index.css';

function App(){
 
  let [score,setScore] = useState(0);

  return(
<div>
  <h1>Counter Created By Me</h1>
  <h2>The Score Value is {score}</h2>
<button onClick={()=>(score<25)?setScore(score+1):""}>Increement</button>
<button onClick={()=>{setScore(score-1)}}>Decreeement</button>
<button onClick={()=>{setScore(0)}}>Reset</button>

</div>
  )
}

export default App;

