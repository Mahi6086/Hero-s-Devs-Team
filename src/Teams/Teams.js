import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Teams.css'

const Teams = (props) => {
    /* Use destructuring method */
    const {name,img,Role,ExpertIn,Experience,Salary} = props.team || {}
    console.log(props.team);

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
         <div className="col-md-4 g-4">
                <div className="card h-100">
                    <img style={{height:'200px', width:'200px', borderRadius:'100px', }} src={img}class="card-img-top mx-auto mt-4" alt="..."/>
                    <div className="card-body">
                    <h2 className="member-name">Name: {name}</h2>
                    <h3>Role: {Role}</h3>
                    <h4>ExpertIn: {ExpertIn}</h4>
                    <h4>Experience: {Experience}</h4>
                    <h2>Salary: {Salary}$</h2>
                    <div className="addToCart">
                    <button onClick={()=> props.handleAddCart(props.team)} type="button" class="btn btn-warning mx-auto">{element} add to cart</button>
                    </div>
                    </div>
                </div>
        </div>   
               
    );
};

export default Teams;