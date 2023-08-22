import axios from 'axios';
import React, { useState, useEffect } from 'react';

function IndividualPost(props) {
    const [post, setPost] = useState({});
    
    useEffect(() => {
        const postId = props.match.params.postId;
        axios
            .get(`http://localhost:5000/blog/${postId}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [props.match.params.postId]);
    
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {/* Display other post details */}
        </div>
    );
}

export default IndividualPost;
