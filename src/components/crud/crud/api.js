import axios from "axios";

export const getNames=async()=>{
    return await axios.get('http://localhost:8080/data');
}

export const createName=async (name,comment) =>{
    return await axios.post('http://localhost:8080/data', name,comment);
}

export const getName=async (id,name,comment) => {
    return await axios.get(`http://localhost:8080/data/${id}`,name,comment);
}

export const removeName=async (id) =>{
    return await axios.delete(`http://localhost:8080/data/${id}`);
}

export const updateName=async(id, name, comment)=>{
    return await axios.put(`http://localhost:8080/data/${id}`,name,comment);
}