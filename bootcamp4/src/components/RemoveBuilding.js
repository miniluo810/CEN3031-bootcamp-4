import React from 'react';

const RemoveBuilding=({listUpdate,selectedBuilding})=>{
    return (
        <button type="button" 
        onClick={()=>listUpdate(selectedBuilding+1)}>
            REMOVE
        </button>
    )


}
export default RemoveBuilding;