import React, { useEffect, useState } from "react";
// const ProductList=()=>{
//     const [products, setProducts]=useState([]);
//     useEffect(()=>{
//         getProducts();
//     },[])
//     const getProducts=async()=>{
//         const result = await fetch('http://localhost:8080/api/configurations');
//         const data= await result.json();
//         setProducts(data);
//      }
//     return (
//         <div className="products-list">
//             <h3>Product List</h3>
//             {/* <input className="search" type="text" placeholder="Search product" onChange={searchandle}/> */}
//             <ul>
//                 <li>S.No</li>
//                 <li>Name</li>
//                 <li>Price</li>
//                 <li>Category</li>
//                 {/* <li>Operation</li> */}
//             </ul>
//         {
//            products.length ?( Array.isArray(products) && products.map((item, index)=>
//             <ul >
//             <li>{index+1}</li>
//             <li>{item.name}</li>
//             <li>{item.price}</li>
//             <li>{item.category}</li>
//             {/* <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
//             <Link to={"/update/"+item._id}>Update</Link>
//             </li> */}
//         </ul>
//             )
//             ):<h1>No Result Found</h1>
//         }
//         </div>
//     )

// }
// export default ProductList;
// import React from 'react'
import getProducts from './ProductList';

const ProductList=(id)=>{
    
const [data, setdata]=useState('')
useEffect(()=>{
    if (id){
        fetchdata(id);
    }
},[id]);
const fetchdata=async(id)=>{
    try {
    const response=await fetch(`http://localhost:8080/api/configurations/${id}`);
    const productdata=await response.json();
    setdata(productdata);
    }
    catch(error){
        console.error('Error ', error);
    }
}




  return (
    <div className='abcinput'>
      <h1>Fetch Config</h1>
      
      
      <h3>Config To Load (ConfigID):</h3>
        <input className="inputbox" type="text" placeholder='ABC' />
      
      <div >
      <button  className="button" type='input' >submit</button>
      </div>
      <p>click the "Submit" button and the configId with this if will get from "http://localhost:8080/api/configurations/(id)" and  shown below.</p>
    </div>
  )
};
export default ProductList;
