import axios from 'axios'
import React, { useEffect, useState } from 'react'

function BlogPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/blog')
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(error => {
                console.error('Error fetching posts:', error)
            })
    }, [])

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>TITULO: {post.title}</h3>
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
