import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function BlogPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:5000/blog')
            .then(response => {
                setPosts(response.data.posts)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching posts:', error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>Loading posts...</p>;
    }

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(post => (

                    
                    <li key={post.id}>
                        
                        <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                        <p>DESCRICAO: {post.content}</p>
                        <p>Author: {post.author}</p>
                        <p>
                            DATA DE POSTAGEM:{' '}
                            {new Date(post.date_posted).toLocaleDateString(
                                'pt-BR',
                            )}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogPosts
