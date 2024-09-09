import { useEffect, useState } from "react";
import "./App.css"
function App() {

const [advice,setAdvice]= useState("");
const [AdvID,setID]= useState(0);
// useEffect(() => {
//   try {
//     const data=  fetch('https://api.adviceslip.com/advice')
//     const advice= data.json()
//     setAdvice(advice.slip.advice);
//     } catch (e){
//       console.log(e)
//     }
//   },[]);

  const getData= async()=> {
    try {
      const data= await fetch('https://api.adviceslip.com/advice')
      const advice= await data.json()
      setAdvice(advice.slip.advice);
      setID(advice.slip.id);
      } catch (e){
        console.log(e)
      }
  }

  return (
         <div id="container">
            <div id="centric">
              <h1> ADVICE #{AdvID} </h1>
              <p id="advice" > "{advice}"  </p>
              <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            </div>
            <div id="pressy" onClick={getData}>
                <button type="button" id="advBtn" ></button>
                <svg id="dice" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </div>
          </div>
  );
}

export default App;
