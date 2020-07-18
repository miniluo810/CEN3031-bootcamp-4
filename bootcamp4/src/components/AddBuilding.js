import React,{useState,useEffect} from 'react';


const AddBuilding=(props)=>{
    let buildingInfo={
        id:'',
        name:'',
        code:'',
        address:'',
        coordinates:{
            latitude:'',
            longitude:''
        }
    
    };
    const[name,setName]=useState('');
    useEffect(()=>{
        buildingInfo.name=name;
    });
    const[code,setCode]=useState('');
    useEffect(()=>{
        buildingInfo.code=code;
    });
    const[address,setAddress]=useState('');
    useEffect(()=>{
        buildingInfo.address=address;
    });
    const[lat,setLat]=useState('');
    useEffect(()=>{
        buildingInfo.coordinates.latitude=lat;
    });
    const[lng,setLng]=useState('');
    useEffect(()=>{
        buildingInfo.coordinates.longitude=lng;
    });
    const[length,setLength]=useState(149);
    useEffect(()=>{
        buildingInfo.id=length;
    });
    const addItem=(data)=>{
        data.preventDefault();//prevent refresh
        let newList=props.getList;
        setLength(length+1);
        newList.push(buildingInfo);
        props.addList([...newList]);
        setName(''); //clearn the search boxes after submission 
        setCode('');
        setAddress('');
        setLat('');
        setLng('');
    }
    
    return(
        <div>
            <div className="title">Add Building</div>
            <div className="card">
        <form>
            <label>Name: </label>
            <input type="text"
            placeholder="Name(required)"
            onChange={event=>setName(event.target.value)}
            value={name}
            />
            <label>Code: </label>
            <input type="text"
            placeholder="Code(required)"
            onChange={event=>setCode(event.target.value)}
            value={code}
            />
            <label>Address: </label>
            <input type="text"
            placeholder="Address"
            onChange={event=>setAddress(event.target.value)}
            value={address}
            />
            <label>Latitude: </label>
            <input type="text"
            placeholder="Latitude"
            onChange={event=>setLat(event.target.value)}
            value={lat}
            />
            <label>Longitude: </label>
            <input type="text"
            placeholder="Longitude"
            onChange={event=>setLng(event.target.value)}
            value={lng}
            />
             <button type="submit" 
            onClick= {addItem}>
            ADD BUILDING
             </button>
        </form>
        </div>
        </div>
    )
}

export default AddBuilding;