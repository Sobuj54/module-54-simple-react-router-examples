import React from 'react';import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div>
            <h3>friends path.</h3>
            <div className='friends'>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;