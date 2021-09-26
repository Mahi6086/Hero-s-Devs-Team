import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Developers.css'

const Developers = (props) => {
    /* Use destructuring method */
    const {img,name,Role,ExpertIn,Experience,Salary} = props.developer || {}
    // console.log(props.developer);

    const element = <FontAwesomeIcon icon={faUserPlus} />

    return (
             <div className="col-md-4 g-4">
                <div className=" developers  card h-100">
                    <img style={{height:'200px', width:'200px', borderRadius:'100px', }} src={img}className="card-img-top mx-auto mt-4" alt="..."/>
                    <div className="card-body">
                    <h2> <span style={{fontWeight:"bold", color:"#880E3F"}}>Name:</span> {name}</h2>
                    <h3><span style={{fontWeight:"bold", color:"#880E3F"}} >Role:</span> {Role}</h3>
                    <h4><span style={{fontWeight:"bold", color:"#880E3F"}}>ExpertIn:</span> {ExpertIn}</h4>
                    <h4><span style={{fontWeight:"bold", color:"#880E3F"}}>Experience:</span> {Experience}</h4>
                    <h4><span style={{fontWeight:"bold", color:"#880E3F"}}>Salary:</span> ${Salary}</h4>
                    <div className="addToCart">
                    <button onClick={()=> props.handleAddCart(props.developer)} type="button" className="btn btn-warning mx-auto">{element} Hire This Person</button>
                    </div>
                    </div>
                </div>
         </div>
               
    );
};

export default Developers;