import React from 'react';
import '../styles/style.css';

function Generate(props){
    return (
    <div class="rightpanel">
        My CV:
        Name: {props.firstname} {props.lastname}
        Title: {props.title}
        Address: {props.address}
    </div>
    )
}

export default Generate;

