import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {

    const [isTrue, setIsTrue] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo}
                     className={isTrue ? "App-logo" : 'Something-else'}
                     alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {isTrue && (
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                )}
                <button onClick={() => setIsTrue(false)}>Click me</button>
            </header>
        </div>
    );
}

const a = App;
