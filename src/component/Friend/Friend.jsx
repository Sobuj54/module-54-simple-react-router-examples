import React from 'react';
import './Friend.css';
import { Link } from "react-router-dom";

const Friend = ({friend}) => {
    console.log(friend);
    const {name, phone, email, id} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <h5>Phone : {phone}</h5>
            <p><Link to={`/friend/${id}`}>Show more details</Link></p>
        </div>
    );
};

export default Friend;