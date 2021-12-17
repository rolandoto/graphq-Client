import React, { useState } from 'react';
import CustonHooks from '../../custon-hooks/custon-hook';
import AddPersons from './AddPersons';
import DeletePersons from './DelePersons';
import FindPersons from './FindPersons';
import Notify from './Notify';
import Persons from './persons';
import { Link } from '@reach/router';
import Edit from './Edit';
const Home =() => {

  const {loading,data,error} = CustonHooks()
  
  const [errorMessage,setErrorMessage] = useState(null)

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null),5000)
  }

  if(loading) return <h1>loading</h1>
  if(error)  return <h1>error</h1>
    return (
         <div> 
            <Notify  errorMessage={errorMessage} />
              <Edit />
            <div>
              <FindPersons /> 
              </div>
                {data.allPerson.map(({id,name,vote,phone}) =>(
                    <div key={id}>
                        <Persons id={id} name={name} vote={vote} phone={phone} />
                        <DeletePersons id={id} />
                    </div>
                 ))}
                 <AddPersons notifyError={notifyError}   />
            </div>
    )
     
}

export default  Home