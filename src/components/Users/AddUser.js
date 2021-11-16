import { Button, Input, Form, Label } from '../../styles/mainStyles';

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }


    return (
        <Form onSubmit={addUserHandler}>
            <Label htmlFor="username">username</Label>
            <Input id="username" type="text" placeholder="name..." />
            <Label htmlFor="age">age</Label>
            <Input id="age" type="number" placeholder="age..." />
            <Button type="submit">Add User</Button>
        </Form>
    );
}

export default AddUser;