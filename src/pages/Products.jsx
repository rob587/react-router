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
      <div className="container">
        <div className="row">

            {products.map((product)=>{
              return(
            <div className="col-4" key={product.id}>
              <img src={product.image} alt={product.description} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
           </div>

            )

              
            })}

        </div>
      </div>
    </div>
  )
}

export default Products
