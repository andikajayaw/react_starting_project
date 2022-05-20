import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleAge = (event) => {
        setAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if(username.trim().length === 0 || age.trim().length === 0) {
            setError({title: 'Name and age is invalid', message: 'Please enter a valid name and age'});
            return;
        }

        if(+age < 1) {
            setError({title: 'Age is invalid', message: 'Please enter a valid age (> 0)'});
            return;
        }

        props.onAddUser(username, +age);

        setUsername('');
        setAge('');
    }

    const onConfirm = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirm} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={handleUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age" value={age} onChange={handleAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;