import React from 'react'
import ReactDOM from 'react-dom'
import './SASS/main.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './Store'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AppProvider>
                <App />
            </AppProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
