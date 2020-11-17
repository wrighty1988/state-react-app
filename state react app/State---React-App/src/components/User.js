import React from 'react';
import'./User.css';


const User =(props) =>{
    return(
        <div className="card">
            <img src={props.userImage} alt= "Avatar"/>
            <h1>Name:{props.name} </h1>
            <h1>City:{props.city} </h1>
            
        </div>
    )
}
export default User;