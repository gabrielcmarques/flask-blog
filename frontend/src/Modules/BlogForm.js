import axios from 'axios';
import React, { useState } from 'react';

function BlogForm() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .post('http://localhost:5000/blog/adicionar', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('\n Error posting data:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="subtitle"
                placeholder="Subtitle"
                value={formData.subtitle}
                onChange={handleChange}
            />
            <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
            />
            <textarea
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogForm;