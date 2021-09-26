import React, { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Teams from '../../../Teams/Teams';
import './Projects.css'

const Projects = () => {

    const [teams, setTeams] = useState([]);
    /* To keep cart data in projects */
    const [cart, setCart] = useState([]);

    const handleAddCart = (team) => {
        const newCart = [...cart,team]
        setCart(newCart);
    }
     useEffect(() => {
         fetch('./projects.JSON')
         .then(res => res.json())
         .then(data => setTeams(data));
     }, [])

    return (
    <div className="projects">
        <div className="row">
            <div className="col-md-9">
                {/* teams */}
                <div className="teams-container row">
                    {
                        teams.map(team => <Teams
                        key={team.ExpertIn}
                        team={team}
                        handleAddCart={handleAddCart}
                        ></Teams>)
                    }
                   
                   <Teams></Teams>    
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