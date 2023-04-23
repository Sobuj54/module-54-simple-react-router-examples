import React from 'react';import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";

const Friends = () => {
    const data = useLoaderData();

    console.log(data);

    return (
        <div>
            <h3>friends path.</h3>
        </div>
    );
};

export default Friends;