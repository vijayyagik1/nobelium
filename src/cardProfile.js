import React from 'react';
import './CardProfile.css'



export default function CardProfile(props){
    return(
        <div className='card-container'>
            <img src={props.user.image} style={{width:'50px', height:'50px'}} />
            <h3>{props.user.designation}</h3>
            <h1>{props.user.name}</h1>
            <p>{props.user.description}</p>
        </div>
    )
}