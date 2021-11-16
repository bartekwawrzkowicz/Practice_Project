import { useState } from 'react';
import { Button, Card, Form, Input, Label } from '../../styles/mainStyles';

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [personalData, setPersonalData] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername === '' || enteredAge === '') {
            return
        } else if (+enteredAge < 1) {
            return
        } else {
            const data = `New User: ${enteredUsername} is ${enteredAge} years old. How \`bout that motherfuckers?`;
            setPersonalData(data);
            setEnteredUsername('');
            setEnteredAge('');
        }
    }

    const usernameInputChangeHandler = (event) => {
        const newName = event.target.value;
        setEnteredUsername(newName);
    }

    const ageInputChangeHandler = (event) => {
        const newAge = event.target.value;
        setEnteredAge(newAge);
    }

    console.log(personalData);


    return (
        <Card>
            <Form
                onSubmit={addUserHandler}>
                <Label
                    htmlFor="username">username</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="name..."
                    value={enteredUsername}
                    onChange={usernameInputChangeHandler}
                />
                <Label
                    htmlFor="age">age</Label>
                <Input
                    id="age"
                    type="number"
                    placeholder="age..."
                    value={enteredAge}
                    onChange={ageInputChangeHandler}
                />
                <Button
                    type="submit">Add User</Button>
            </Form>
        </Card>
    );
}

export default AddUser;