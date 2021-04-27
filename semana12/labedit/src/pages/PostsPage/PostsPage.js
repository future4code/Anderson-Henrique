import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'



const PostsPage = () => {


    useEffect(() => {
        getPosts()
    }, [])
    const [posts, setPosts] = useState([])


    const getPosts = async () => {
        const token = window.localStorage.getItem('token')
        try {

            const response = await axios.get(`${BASE_URL}posts`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("Response: ", response.data)
            setPosts(response.data.posts)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }


    const renderPosts = posts.map( (post) => {
        return <div key={post.id}>
            <h1>{post.title}</h1>
        <p>{post.text}</p>
        <h3>Author: {post.username}</h3>
        </div>
    })

    return (
        <div>
            <h1>PostPage</h1>
{renderPosts}
        </div>
    )
}

export default PostsPage