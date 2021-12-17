import React from "react";


const Persons =({id,name,phone,vote})=>{
    return (
        <div>
            <h1> id :{id} </h1>
            <h1>name: {name} </h1>
            <h1> vote :{vote} </h1>
            <h1> phone :{phone} </h1>
        </div>
    )
}
export default Persons 