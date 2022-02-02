import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppVersionControl, ControlButton } from 'ts-lib';
import { createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({});

function App() {
    return (
        <ThemeProvider theme={theme} >
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <AppVersionControl version="2.0.0" env="prod"/>
                    <ControlButton />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
