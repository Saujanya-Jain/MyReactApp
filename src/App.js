import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://api.genderize.io/?name=luc").then((result)=>{
    result.json().then((resp)=>{
      // console.warn("result",resp)
      setData(resp)
    })
  })  
  },[])
  console.warn(data)
  return (
    <div className="App">
      <table border="1">
        <tr>
          <td>Count</td>
          <td>Name</td>
          <td>Gender</td>
          <td>Probability</td>
        </tr>
        {/* { 
          data.map((item)=>
            <tr>
              <td>item.count</td>
              <td>item.name</td>
              <td>item.gender</td>
              <td>item.probability</td>
            </tr>
          )
        }  */}
      </table>
    </div>
  );
}
export default App;