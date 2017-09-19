import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePickRandom = this.handlePickRandom.bind(this);
        this.handleAddOpt = this.handleAddOpt.bind(this);
        this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this);
        this.state = {
            optionsArr: []
            
        }
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('optionsArr'); 
            const options = JSON.parse(json);
    
            if(options){
                this.setState(() => ({optionsArr: options}));            
            }
        } catch (error) {
        }
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.optionsArr.length !== this.state.optionsArr.length){
            //storing data into local storage
            const json = JSON.stringify(this.state.optionsArr);
            localStorage.setItem('optionsArr', json);
        }
    };

    componentWillUnmount(){
        console.log('Component Will Un-Mount!');
    };

    handleDeleteAll(){
        this.setState(() => ( { optionsArr: [] } ));
    }

    handlePickRandom() {
        let randomNo = Math.floor(Math.random() * this.state.optionsArr.length); 
        alert(this.state.optionsArr[randomNo]);
    }

    handleAddOpt(addedItem) {
        if(!addedItem){
            return('Validation: Enter valid value to add!');
        } else if(this.state.optionsArr.indexOf(addedItem) > -1 ) { //if input exists
            return('Duplication: This value exists!');
        }
        this.setState((preState) => ({ optionsArr: preState.optionsArr.concat(addedItem) }) );
    }

    handleDeleteOptionSingle(item){
        this.setState((prevState) => ({ optionsArr: prevState.optionsArr.filter(option => option !== item) }) );
    }

    render() {
        const subtitle = "Put your life deicion in the computer hands!";
        return(
       <div>
            <Header 
                subtitle={subtitle}
            />
            <Action 
                isOptionsEmpty={this.state.optionsArr.length > 0} 
                handlePick={this.handlePickRandom}
            />
            <Options 
                optionsPass={this.state.optionsArr} 
                onHandleDelete={this.handleDeleteAll}
                onDeleteSingle={this.handleDeleteOptionSingle}
            />
            <AddOption handleAddOpt={this.handleAddOpt}/>
        </div>
            );
    }

};

export default IndecisionApp;