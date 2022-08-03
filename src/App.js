import React, { useState } from 'react';
import Users from './components/Users';
import Transactions from "./components/Transactions";
import './App.css';

function App() {
    const [selectedUserId, setSelectedUserId] = useState();

    const handleSetUser = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <div className="App">
            <div className={'container'}>
                <div className={'left'}>
                    <Users {...{handleSetUser}}/>
                </div>
                <div className={'right'}>
                    <Transactions {...{selectedUserId}}/>
                </div>
            </div>
        </div>
    );
}

export default App;
