import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props || {}
    /* use reduce to calculate total cost */
    const totalReduce=(preValue,CurrValue)=>preValue+CurrValue.Salary;
    const total=cart.reduce(totalReduce,0)
    return (
        <div className="cart">
            <h1 style={{color:"#ac8585", textAlign:"center"}}>My-Cart</h1>
            <h2>Team Member Added: {cart.length}</h2>
            <h3>Total Cost: {total}$</h3>
            <ul>
                {
                    cart.map((team)=><li>
                        {team.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Cart;