import React from 'react';
import '../styles/style.css';

function Generate(props){
    return (
    <div class="rightpanel">
        My CV:
        {props.name}
    </div>
    )
}

export default Generate;

