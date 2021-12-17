import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_PERSON } from '../../graphql/graphql-mutation';
import { PERSONS_ALL } from '../../graphql/graphql-queris';




const AddPersons  =({notifyError})=>{
  const [addperson] = useMutation(ADD_PERSON,{
    refetchQueries: [{query:PERSONS_ALL}],
    onError:(error) =>{
      notifyError(error)
    }
  });

  const [name,setName] = useState('')
  const [vote,setVote] = useState('')
  const [phone,setPhone] = useState('')

  const hansubmit =(e)=>{
     e.preventDefault();
     addperson({variables:{name,vote,phone}})
     setName('')
     setVote('')
     setPhone('')
  }

  return (
    <div>
          <form onSubmit={hansubmit} >
              <input placeholder='name' value={name}  onChange={evt => setName(evt.target.value)} />
              <input placeholder='vote'  value={vote} onChange={evt => setVote(parseInt( evt.target.value))} />
              <input placeholder='phone'  value={phone} onChange={evt => setPhone(( evt.target.value))} />
              <button> add person </button>
          </form>
    </div>
  )
}

export default AddPersons