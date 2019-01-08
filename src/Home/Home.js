import React from 'react';

const home = (props) => {
    return (
        <div>
            <p>Home</p>
            <a href="/login" className="button primary" >Login</a>
            <br/>
            <a href="/signup" className="button primary" >Sign Up</a>
        </div>
    );
}

export default home;