import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    salutation: '',
    foreName: '',
    surname: '',
    telephone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { salutation, foreName, surname, telephone } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        console.log(user)
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Salutaion</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salutation' value={salutation} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ForeName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='foreName' value={foreName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">SurName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='surname' value={surname} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">TelePhone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='telephone' value={telephone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Contact</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;