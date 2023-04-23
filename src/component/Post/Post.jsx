import React from 'react';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Post.css'

const Post = ({post}) => {
    const {id, title} =post;

    const navigate = useNavigate();
    const clickHandler =() => {
        navigate(`/post/${id}`);
    }
    
    return (
        <div className='post'>
            <h2>id: {id}</h2>
            <h3>Title : {title}</h3>
            <Link to={`/post/${id}`}>show details</Link>
            <Link to={`/post/${id}`}><button>Show post details</button></Link>
            <button onClick={clickHandler}>with button handler</button>
        </div>
    );
};

export default Post;