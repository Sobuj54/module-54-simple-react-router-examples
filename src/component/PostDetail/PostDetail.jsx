import React from 'react';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();
    const {body, title, userId, id} = post;
    return (
        <div>
            <h3>this is post details of id : {id}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;