import {gql} from '@apollo/client'
export const ADD_PERSON = gql`
  mutation createperson($name:String!  $vote:Int! $phone:String! ){
  addperson(name:$name  vote: $vote,phone :$phone ){
    name
    vote
  }
}
`

export  const DELE_PERSONS = gql`
mutation deleperson($dele:String!) {
   deletePersonas(id:$dele){
    id
    name
    vote
    phone
  }
}`

export const EDI_PERSON = gql`
mutation Ediperson ($name:String! $phone:String!){
  editpersona(name:$name phone:$phone) {
    id
    name
    phone
  }
}`