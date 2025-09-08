import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const DetailProduct = () => {
    
    const [newDetails, setNewDetails] = useState([])
    const {id} = useParams()
    
    
    const fetchDetail = () =>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp)=>{
          setNewDetails([resp.data])
        })
      }

        useEffect(() => {
          fetchDetail()
        }, [id])



  return (
    <div className="container">
        <div className="row">
            {newDetails.map((detail)=>{
                return (
                <div className="col-12" key={detail.id}>
                    <div className="card shadow-sm h-100">
                <img className="card-img-top p-3" src={detail.image}  alt={detail.description}/>
                <div className="card-body ">
                  <h2 className="card-title ">{detail.title}</h2>
                  <p className="card-text">{detail.description}</p>
                  <h3 className="card-text mt-auto fw-bold">{detail.price}$</h3>
                 
                </div>
              </div>
            </div>

                )
            })}
        </div>
    </div>
  )
}

export default DetailProduct
