import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodocontextProvider } from './Contexts/TodoContexts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodocontextProvider>
        <App />
    </TodocontextProvider>
)
