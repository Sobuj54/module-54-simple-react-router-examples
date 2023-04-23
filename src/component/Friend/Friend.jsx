import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    console.log(friend);
    const {name, phone, email} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <h5>Phone : {phone}</h5>
        </div>
    );
};

export default Friend;