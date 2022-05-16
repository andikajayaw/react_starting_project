import React, {useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const onAddUserHandler = (userName, userAge) => {
    setUsersList(
      (prevUserList) => {
        return [...prevUserList, {name: userName, age: userAge}];
      }
    )
  }

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
