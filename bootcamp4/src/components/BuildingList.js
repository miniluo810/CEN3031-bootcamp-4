import React from 'react';


const BuildingList =({data,filterText,viewInfo})=>{

    const buildingList = data
    .filter(name=>{
        return name.name.toLowerCase().indexOf(filterText.toLowerCase())>=0
    })
    .map(directory => { 
            return (
                <tr key={directory.id} > 
                    <td>{directory.code} </td>
                    <td onClick={()=>viewInfo(directory.id)}> {directory.name}
                    </td>
                </tr>
            );  
    });

    return <div>{buildingList}</div>;
};


export default BuildingList;
