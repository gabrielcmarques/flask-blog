import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function BlogEdit() {
    const { postId } = useParams()
    const location = useLocation()
    const initialFormData = location.state
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/blog/${postId}`)
            .then(response => {
                const post = response.data
                setFormData({
                    title: post.title,
                    subtitle: post.subtitle,
                    author: post.author,
                    content: post.content,
                })
            })
            .catch(error => {
                console.error('Error fetching post:', error)
            })
    }, [postId])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        axios
            .put(`http://localhost:5000/blog/editar/${postId}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log(response.data)
                // Redirect or update state as needed
            })
            .catch(error => {
                console.error('Error updating post:', error)
            })
    }

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
            <button type="submit">Atualizar Informações</button>
        </form>
    )
}

export default BlogEdit
