import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} />
        </div>
    );
}

export default person;