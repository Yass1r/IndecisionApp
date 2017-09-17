import React from 'react';
import Option from './Option';


const Options = (props) => {
    let optionsPass = props.optionsPass;
    return (
        <div>
            <button onClick={props.onHandleDelete}>Reset Options</button>
            <p>Option(s) Component here:</p>
            {
                optionsPass.map((item) => {
                    return <Option 
                                key={item} 
                                item={item}
                                onDeleteSingle={props.onDeleteSingle}   
                             />;
            })}
        </div>
    );
};

export default Options;