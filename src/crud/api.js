import axios from "axios";

export const getNames=async()=>{
    return await axios.get(`${process.env.REACT_APP_API}`);
}

export const createName=async (name,comment) =>{
    return await axios.post(`${process.env.REACT_APP_API}`, name,comment);
}

export const getName=async (id) => {
    return await axios.get(`${process.env.REACT_APP_API}/${id}`);
}

export const getComment=async (id) => {
    return await axios.get(`${process.env.REACT_APP_API}/${id}`);
}

export const removeName=async (id) =>{
    return await axios.delete(`${process.env.REACT_APP_API}/${id}`);
}

export const updateName=async(id, name, comment)=>{
    return await axios.put(`${process.env.REACT_APP_API}/${id}`,name,comment);
}