import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
// import logo from './logo.svg'

function App() {
    const [message, setMessage] = useState('')
    useEffect(() => {
        // Fetch data from your backend API
        axios
            .get('http://localhost:5000/api/hello')
            .then(response => {
                setMessage(response.data.message)
            })
            .catch(error => {
                console.error('Error fetching message:', error)
            })
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <p>{message}</p>
            </header>
        </div>
    )
}

export default App
