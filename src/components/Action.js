import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.isOptionsEmpty}
            >
                What Should I do!
            </button>
        </div>
    );
};

export default Action;