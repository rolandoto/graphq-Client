import {useQuery} from '@apollo/client'
import { PERSONS_ALL } from '../graphql/graphql-queris';

const CustonHooks =()=>{
    const { loading, error, data } = useQuery(PERSONS_ALL);

    return {loading,error,data}
}
export default CustonHooks