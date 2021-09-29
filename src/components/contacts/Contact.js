import React from 'react';


const Contact = (props) => {


    const showContact= (myMessage)=>{
        console.log("yahouuu" ,myMessage)
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {props.name} <i onClick= {showContact.bind(this,'mohamed')} className="fa fa-sort-down"></i>
                    <i style={{color: 'red' , float:"right" }} className="fa fa-times"></i>
                </h4> 
                <p className="card-text">
                    <ul className="list-group">
                        <li className="list-group-item">{props.phone}</li>
                        <li className="list-group-item">{props.email}</li>
                    </ul>    
                </p>
                <p> Website est :{props.website}</p>
            </div>
        </div>

    );
};

export default Contact;