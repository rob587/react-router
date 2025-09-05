import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex">
                        <h2>Visita la nostra pagina</h2>
                    </div>
                    <ul className="list-unstyled d-flex">
                        <li className="me-2">
                            <NavLink to="/">Homepage</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink to="/about">Chi siamo</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink to="/products">I nostri Prodotti</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Links
