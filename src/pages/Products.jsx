import React, {useEffect, useState } from 'react'
import axios from 'axios'


const Products = () => {
  
  const [products, setProducts] = useState([])
  
  const url = ("https://fakestoreapi.com/products")
  
  const fetchData = () =>{
    axios.get(url).then((resp)=>{
      setProducts(resp.data)
    })
  }

    useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <div className="container mt-5">
        <div className="row g-4">

            {products.map((product)=>{
              return(
            <div className="col-4 d-flex mt-5" key={product.id}>
             <div className="card shadow-sm h-100">
                <img className="card-img-top p-3" src={product.image}  alt={product.description}/>
                <div className="card-body ">
                  <h2 className="card-title ">{product.title}</h2>
                  <p className="card-text">{product.description}</p>
                  <h3 className="card-text mt-auto fw-bold">{product.price}$</h3>
                 
                </div>
              </div>
           </div>

            )

              
            })}

        </div>
      </div>
    </div>
  )
}

export default Products
