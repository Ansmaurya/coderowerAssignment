import React, { useEffect } from 'react'
import getProducts from './ProductList';
import{useParams, useNavigate} from "react-router-dom"

const Remark =()=> {
   const [id, setId]=React.useState('');
   const [data, setData]=React.useState('');
   const params=useParams();   
   const navigate=useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[])


const getProductDetails=async (id)=>{
  let result=await fetch(`http://localhost:8080/api/configurations/${id}`)
  result=await result.json();
  setData(result.data)
  setId(result, id)
}
const updateProduct=async(id)=>{
  let result=await fetch(`http://localhost:8080/api/configurations/${id}`,{
    method: 'Put',
    body:JSON.stringify({data}),
    headers:{
      'Content-Type':"application/json"
    }
  });
  // result=await result.json();
  navigate("/update")
}
  



  return (
    <div className='abcinput'>
      <h1>Update Remark</h1>
      
      
      <h3>Config To Update (ConfigID):</h3>
        <input className="inputbox" type="text" placeholder='ABC' value={id} onChange={(e)=>{setId(e.target.value)}} />
        <h3>Remark:</h3>
        <input className="remark" type="text" placeholder='ABC' value={data} onChange={(e)=>{setData(e.target.value)}} />
        
      <div >
      <button onClick={updateProduct}  className="button" type='input' >submit</button>
      </div>
      <p>click the "Submit" button - the configId with this if will get from "http://localhost:8080/api/configurations/(id)" and shown below.</p>
    </div>
  )
};
export default Remark;
