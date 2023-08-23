import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function BlogPost(props) {
    const navigate = useNavigate()
    console.log('\n props:::::::', props)

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    const { postId } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:5000/blog/${postId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                // console.log('\n Post data::::: ', response.data)
                setPost(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('\nError fetching post:', error)
                setLoading(false)
            })
    }, [postId])

    const handleEditClick = () => {
        navigate(`/blog/editar/${postId}`, { state: post })
    }

    const handleDeleteClick = () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${post.title}"?`);
        if (confirmDelete) {
            axios
                .delete(`http://localhost:5000/blog/deletar/${post.id}`)
                .then(response => {
                    console.log(response.data);
                    // Optionally, you can redirect to a different page
                    navigate('/blog');
                })
                .catch(error => {
                    console.error('Error deleting post:', error);
                });
        }
    };

    if (loading) {
        return <p>Carregando informação...</p>
    }

    console.log('\n POST::::', post)
    return (
        <div>
            <h1>Titulo: {post.title}</h1>
            <h3>Descrição: {post.content}</h3>
            <p>Autor: {post.author}</p>
            <p>Data de postagem: {post.date_posted} </p>

            {/* Add an Edit button that links to the edit page */}
            <button onClick={handleEditClick}>Editar Post</button>
            <button onClick={handleDeleteClick}>Deletar Post</button>
        </div>
    )
}

export default BlogPost
