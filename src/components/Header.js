import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {(props.title) && <p>{props.subtitle}</p>}
        </div>
    )
};


Header.defaultProps = {
    title: 'Indecision App Default'
};

export default Header;