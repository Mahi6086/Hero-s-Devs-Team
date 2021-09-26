import React, { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Developers from '../../../Developers/Developers';
import './Projects.css'

const Projects = () => {

    const [developers, setDevelopers] = useState([]);
    /* To keep cart data in projects */
    const [cart, setCart] = useState([]);

    const handleAddCart = (developer) => {
        const newCart = [...cart,developer]
        setCart(newCart);
    }
     useEffect(() => {
         fetch('./projects.JSON')
         .then(res => res.json())
         .then(data => setDevelopers(data));
     }, [])

    return (
    <div className="projects">
        <div className="row">
            <div className="col-md-9">
                {/* teams */}
                <div className="developers-container row">
                    {
                        developers.map(developer => 
                        <Developers
                            key={developer.Salary}
                            developer={developer}
                            handleAddCart={handleAddCart}
                            ></Developers>)
                        
                    }
                      
                </div>
                
                  
            </div>
            <div className="cart-container col-md-3">
                {/* cart */}
                <Cart
                cart={cart}></Cart>
            </div>
        </div>
    </div>
    );
};

export default Projects;