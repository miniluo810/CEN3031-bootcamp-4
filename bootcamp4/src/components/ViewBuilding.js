import React from 'react';

const ViewBuilding = ({data,selectedBuilding}) => {
    let buildingName=data[selectedBuilding].name
    let buildingCode=data[selectedBuilding].code;
    let buildingAddress,buildingLat,coords;
    if(data[selectedBuilding].address){
        buildingAddress="Address: "+ data[selectedBuilding].address;
        buildingLat="Coordinates: "+ data[selectedBuilding].coordinates.latitude;
        coords=buildingLat+", "+data[selectedBuilding].coordinates.longitude;
    }
    return (
        <div>
            <p>
                {' '}
                <i>Click on a name to view more information</i>
            </p>
            <div className="card">
                <p>Name: {buildingName}</p>
                <p>Code: {buildingCode}</p>
                <p> {buildingAddress}</p>
                <p> {coords}</p>
            </div>
        </div>
    );
};
export default ViewBuilding;
