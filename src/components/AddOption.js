import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class AddOption extends Component {
    constructor(props) {
        super(props);
        this.onUserSubmit = this.onUserSubmit.bind(this);
        this.state = {
            error: undefined
        }

    }
    onUserSubmit(e){
        e.preventDefault();
        const input = e.target.elements.inputUser.value.trim();
        let error = this.props.handleAddOpt(input);
        
        this.setState(() => ({ error: error }));
        e.target.elements.inputUser.value = '';
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onUserSubmit}>
                    <input type='text' placeholder='Insert a value' name='inputUser' />
                    <button>Add Option!</button>
                </form>
                {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}

            </div>
        );
    }
};