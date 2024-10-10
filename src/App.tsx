import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useNavigate} from 'react-router-dom';
import {FIRST_PAGE, SECOND_PAGE, THIRD_PAGE} from './Links';

function App() {
    const navigate = useNavigate();

    function handleClick(location: string) {
        navigate(location);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                Example of navigation through the navigate callback:
                <button type="button" onClick={() => handleClick(FIRST_PAGE)}>
                    {FIRST_PAGE}
                </button>
                <button type="button" onClick={() => handleClick(SECOND_PAGE)}>
                    {SECOND_PAGE}
                </button>
                <button type="button" onClick={() => handleClick(THIRD_PAGE)}>
                    {THIRD_PAGE}
                </button>
            </header>
        </div>
    );
}

export default App;
