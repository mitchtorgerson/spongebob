import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/Users";

import './index.css';

const Users = ({ handleSetUser }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        void handleGetUsers();
    }, []);

    const handleGetUsers = async () => {
        const {data: users} = await getUsers();
        setUsers(users.users);
    };

    return (
        <div className={'user-container'}>
            {users.map(m => <div className={'user-row'} onClick={() => handleSetUser(m.user_id)}>{m.name}</div>)}
        </div>
    );
};

export default Users;
