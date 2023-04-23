import React from 'react';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
  import { useNavigate } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();
    const {body, title, userId, id} = post;

   const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>this is post details of id : {id}</h3>
            <h6>{title}</h6>
            <p>{body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;