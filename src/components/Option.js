import React from 'react';

export default Option = (props) => {
    let item = props.item;
    return(
        <div>
            {(item) && (
                <p>{item} 
                    <button 
                        onClick={(e) => {
                            props.onDeleteSingle(props.item)
                        }}
                    > 
                        Remove it
                    </button>
                    </p>
            )}
        </div>
    );
};