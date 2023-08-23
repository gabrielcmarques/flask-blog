import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogDelete from './Modules/Blog/BlogDelete'
import BlogEdit from './Modules/Blog/BlogEdit'
import BlogForm from './Modules/Blog/BlogForm'
import BlogPost from './Modules/Blog/BlogPost'
import BlogPosts from './Modules/Blog/BlogPosts'
import HomePage from './Modules/HomePage'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog/" element={<BlogPosts />} />
                    <Route path="/blog/criar" element={<BlogForm />} />
                    <Route path="/blog/:postId" element={<BlogPost />} />
                    <Route path="/blog/editar/:postId" element={<BlogEdit />} />
                    <Route
                        path="/blog/deletar/:postId"
                        element={<BlogDelete />}
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App
