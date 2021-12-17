import React,{useState} from 'react'
import {gql,useMutation} from '@apollo/client'
import { PERSONS_ALL } from '../../graphql/graphql-queris'


const FIND_PERSONS = gql`
mutation findPerson($find:String!) {
  buscarPerson(name:$find){
    id
    name
    phone
  }
}`

const FindPersons =()=>{
    const [buscarPerson,{data,loading,error}] = useMutation(FIND_PERSONS,{
        refetchQueries:[{query:PERSONS_ALL}]
    })
    
    const [name,setName] = useState('')
    
    console.log(data)
    const handsubmit =(e)=>{
        e.preventDefault()
        buscarPerson({variables:{find:name}})
        setName('')
    }

    if(loading) return <h1>...loading cargarndo persons</h1>
    if(error) return <h1> error</h1>
    if(data) return (
        <div>
           <h1>{data.buscarPerson.name} </h1>   
        </div>
    )
    return (
        <div>
                <form onSubmit={handsubmit} >
                    <input placeholder='buscar persons' value={name}  onChange={evt => setName(evt.target.value)} />
                    <button>find Persons </button>
                </form>
                 <div>
                
            </div>
        </div>
    )
}

export default FindPersons