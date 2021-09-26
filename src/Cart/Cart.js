import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props || {}
    /* use reduce to calculate total cost */
    const totalReduce=(preValue,CurrValue)=>preValue+CurrValue.Salary;
    const total=cart.reduce(totalReduce,0)
    return (
        <div>
            <div className="cart">
            <h1 style={{color:"#ac8585", textAlign:"center", borderBottom:"1px solid gray", padding:"10px"}}>My-Cart</h1>
            <h2>Added-Person: {cart.length}</h2>
            <h3 style={{borderBottom:"1px solid gray", padding:"15px"}}>Total-Salary: ${total}</h3>
            </div>
            <br /><br />
            <div className="cart">
            <ul style={{fontSize:"20px", color:"#D33163", fontWeight:"bold"}}>
                <h2 style={{color:"#ac8585", textAlign:"center", borderBottom:"1px solid gray", padding:"10px"}}>Developers Bio</h2>
                {
                    cart.map((team)=><li>
                        {team.name}
                    </li>)
                }
            </ul>
            </div>
        </div>
    );
};

export default Cart;