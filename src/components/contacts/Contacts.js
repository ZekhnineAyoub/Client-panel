

import React from 'react'
import Contact from './Contact';
import Increment from '../Increment';
import axios from 'axios'
import { useEffect, useState } from 'react';

 const Contacts =()=> {

       
       const [data,Setdata] = useState([])

        useEffect(() => {
            
            axios.get('contact/all')
            .then(res=> Setdata(res.data) )
            .catch(err=>(console.error(err)));

        

        }, )


        return (
          <div>
            {data.map((user) => (
              <Contact name={user.nom} phone={user.numeroTelephone} email={user.adresseEmail} website={user.entreprise} />
            ))}

            <Increment />
          </div>
        );
}


export default Contacts;