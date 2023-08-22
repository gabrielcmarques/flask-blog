import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogForm from './Modules/BlogForm';
import IndividualPost from './Modules/IndividualPost';
import TestModules from './Modules/TestModules';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/blog/:postId" element={<IndividualPost />} />
                    <Route path="/" element={<BlogForm />} />
                    {/* <Route path="/" element={<TestModules />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
