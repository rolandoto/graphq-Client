import {useMutation} from "@apollo/client";
import React, { useState } from "react";
import { PERSONS_ALL } from "../../graphql/graphql-queris";
import { EDI_PERSON } from "../../graphql/graphql-mutation";


const Edit =()=>{
    
    const [editpersona] = useMutation(EDI_PERSON,{
        refetchQueries:[{query:PERSONS_ALL}]
    })
    
    const [phone,setPhone] = useState('')
    const [name,setName] = useState('')


    const handsubmitEdit =(e)=>{
         e.preventDefault();
        editpersona({variables:{name,phone}})
        setPhone('')
        setName('')
    }

    return (
        <div>   
            <form onSubmit={handsubmitEdit}>
                <input placeholder='name' value={name} onChange={evt => setName(evt.target.value)}  />
                <input placeholder='edit phone' value={phone} onChange={evt => setPhone(evt.target.value)}  />
                <button> edita </button>
            </form>
        </div>
    )
}

export default Edit