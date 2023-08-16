// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import Routes from './Routes'

// function App() {
//     const [message, setMessage] = useState('')

//     useEffect(() => {
//         async function fetchMessage() {
//             try {
//                 const response = await axios.get('/api/hello')
//                 console.log('\n RESPONSE: ', response)
//                 setMessage(response.data.message)
//             } catch (error) {
//                 console.error('Error fetching message:', error)
//             }
//         }

//         fetchMessage()
//     }, [])

//     return (
//         <BrowserRouter>
//             <div className="App">
//                 <Routes />
//                 <h1>{message}</h1>
//             </div>
//         </BrowserRouter>
//     )
// }

// export default App
