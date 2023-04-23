import React from 'react';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>posts available : {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post 
                    key = {post.id}
                    post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;