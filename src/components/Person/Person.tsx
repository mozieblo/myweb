import React from 'react';
import './Person.css';

interface PropsPerson {
    clicked: (event: React.MouseEvent) => void,
    name: string,
    age: number
}

const person = ( props: PropsPerson ) => (
    <div className="Person" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
    </div>
);

export default person;