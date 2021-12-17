import React from 'react'
import {gql,useMutation} from '@apollo/client'
import { DELE_PERSONS } from '../../graphql/graphql-mutation'
import { PERSONS_ALL } from '../../graphql/graphql-queris'




const DeletePersons =({id})=>{
    
    const [deletePersonas] = useMutation(DELE_PERSONS,{
        refetchQueries:[{query:PERSONS_ALL}]
    })

    const t = 'suma' 
    const handDele =()=>{
        deletePersonas({variables:{dele:id}})
    }
    return (
        <div>
            <button onClick={handDele}>Delete </button>
        </div>
    )
}
export default DeletePersons