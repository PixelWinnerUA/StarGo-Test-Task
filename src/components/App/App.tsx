import React from 'react';
import "../../styles/App.scss"
import UsersList from "./UsersList/UsersList";

const App = () => {
    return (
        <div className="App">
            <header className="App-Header">
                <h1>StarGo Test Task</h1>
            </header>
            <UsersList/>
        </div>
    );
};

export default App;