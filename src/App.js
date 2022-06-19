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
//updateName.......
const updateName=(id)=>{
 axios.put(`http://localhost:5000/update/${id}`,{name})
 console.log(id)
 .then(res=>{
  console.log(res.data)
})
.catch(err=>{
   console.log(err)
})
}

// delete name......
const deletename=(id)=>{
  axios.delete(`http://localhost:5000/delete/${id}`)
}

  return (
   
    <div className='container my-5' style={{width: "35%"}}>
    <table className="table table-danger table-striped">
      <thead>
        <tr>
         <th scope="col">SL no.</th>
          <th scope="col"> Name</th>
          <th scope="col"> D/E</th>
        </tr>
      </thead>
      <tbody>
      {names.length>0 &&
       names.map((item,index)=>{
      return(
        <tr key={index}>
        <th scope="row">{index+1}</th>
       <td>{item.name}</td>
       <td>
       <input type="text" placeholder='Update Name...'  onChange={(e) => {
              setName(e.target.value)
            }}/>
       <button className="btn btn-success" onClick={()=>{updateName(item._id)}}>Update</button>/
        <button className='btn btn-danger' onClick={()=>{deletename(item._id)}}>Delete</button>
       
       </td>
        </tr>
      )
    })}
      </tbody>
    </table>
  <input type="text" className="form-control"  placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}></input>
   <button onClick={()=>Save()}  className="btn btn-primary" type="button">Create</button>
 
    </div>

  );
}

export default App;
