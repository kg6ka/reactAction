import React from 'react';

const Navigation = (props) => {
    return (
        <nav id="nav">
            <ul>{props.list.map((item, i) => (
                <li key={item} className={props.isActive(i) ? 'active' : ''}>
                    <a href="#" onClick={(event)=>props.action(event, i)}>{item}</a>
                </li>
            ))}</ul>
        </nav>
    )
};

export default Navigation;