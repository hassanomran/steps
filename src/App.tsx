import React, { useState } from 'react';
 
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const[step,setStep]=useState(1);
  const[test,setTest] = useState({name:"hassan"});
  const[isOpen,setopen]=useState(true);

  function HandleNext()
{
  if(step<3)
    setStep((s)=>s+1);
  
}
function HandlePrevious()
{
  if(step>1)
    setStep((s)=>s-1);
  // setTest({name:"Ali"})


}
  return (
    <>
      <button className="close" onClick={()=>setopen((is)=>!is)}>&times;</button>
      { isOpen && ( 
  <div className="steps">  
    <div className="numbers">
      <div className={`${step >=1 ? "active" : ""}`}>1</div>
      <div className={`${step >=2 ? "active" : ""}`}>2</div>
      <div className={`${step >=3 ? "active" : ""}`}>3</div>
    </div>
    <p className="message">step {step} {messages[step - 1]}</p>
    <div className="buttons">
      <button 
        style={{backgroundColor:'#7950f2', color:'#fff'}} 
        onClick={HandlePrevious}
      >
        Previous
      </button>
      <button 
        style={{backgroundColor:'#7950f2', color:'#fff'}} 
        onClick={HandleNext}
      >
        Next
      </button>
    </div>
  </div>
)}

    </>
  
  );
}

export default App;
