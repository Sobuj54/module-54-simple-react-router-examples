import React from 'react';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";

const FriendDetail = () => {
    const friend = useLoaderData();
    // console.log(friend);
    const {name, email, phone} =friend;
    return (
        <div>
            <h3>friend details are here.</h3>
            <h3>Name: {name}</h3>
            <h4>Email : {email}</h4>
            <h5>Phone : {phone}</h5>
        </div>
    );
};

export default FriendDetail;