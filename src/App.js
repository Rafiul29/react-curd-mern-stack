import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const[names, setNames]=useState([
    
])
const[name, setName]=useState('')
  const Save=async(e)=>{
    
    
    console.log("hello")
      await axios.post("http://localhost:5000/save",{
        name
      },{headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'}})
      .then((data)=>{
        console.log(data)
      })
      
  }
  
  useEffect(()=>{
    getName();
  },[])
  const getName=async()=>{
    await axios.get("http://localhost:5000/getName")
    .then((data)=>{
      setNames(data.data);
    })
}

  return (
   
    <div style={{width: "50%"}}>
    <table className="table table-danger table-striped">
      <thead>
        <tr>
         <th scope="col">SL no.</th>
          <th scope="col"> Name</th>
        </tr>
      </thead>
      <tbody>
      {names.length>0 &&
    names.map((item,index)=>{
      return(
        <tr key={index}>
        <th scope="row">{index+1}</th>
       <td>{item.name}</td>
        </tr>
      )
    })}
      </tbody>


   

  
    </table>
    <input type="text" className="form-control"  placeholder='enter your name' onChange={(e)=>setName(e.target.value)}></input>
   <button onClick={()=>Save()}  className="btn btn-primary" type="button">Create</button>
 
    </div>

  );
}

export default App;
