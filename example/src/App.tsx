import React from 'react';
import './App.css';
import {Input} from "./components";

interface Field {
    name: string,
    type?: 'text' | 'number' | 'email' | 'password',

}

function App() {
    const fields: Field[] = [
        {name: 'name', },
        {name: 'email', type: 'email', },
        {name: 'mobile', type: 'number', },
    ];

    return (
        <div className="App">

            <Input type={'text'} name={'t'} value={2}/>
        </div>
    );
}

export default App;
