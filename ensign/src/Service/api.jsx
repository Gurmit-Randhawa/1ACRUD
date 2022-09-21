import axios from 'axios';

const usersUrl = 'https://localhost:7075/api/Contacts';


export const getUsers = async (id) => {
    id = id || '';
    try {
         const abc = await axios.get(`${usersUrl}`);
         console.log(abc);
         return abc;
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}