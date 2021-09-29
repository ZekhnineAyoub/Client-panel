
import React, { Component } from "react";
import axios from 'axios'

class AddContact extends Component {

   state = {
       nom: '',
       adresseEmail:'',
       numeroTelephone:''
   }

   changeHandler = e =>{
    this.setState({ [e.target.name]: e.target.value })
   }

   submitHandler = e =>{

    axios.post('contact',this.state)
    .then(response =>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })

   }


render(){    
  return (
    <div>
     <form className="post" onSubmit={this.submitHandler}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Add Contact</h4>
          <p className="card-text">
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input type="text" name="nom"  className="form-control" value={this.nom} onChange = {this.changeHandler}  />
            </div>
            <div class="form-group">
              <label htmlFor="">Email</label>
              <input type="text" name="adresseEmail"  className="form-control" value={this.adresseEmail} onChange ={this.changeHandler}  />
            </div>
            <div class="form-group">
              <label htmlFor="">Phone</label>
              <input type="text" name="numeroTelephone"  className="form-control" value={this.numeroTelephone} onChange ={this.changeHandler}  />
            </div>
          </p>
        </div>
        <button type="submit" class="btn btn-success">Add new Cart</button>
      </div>
      </form>
    </div>
  );
   }

};

export default AddContact;
