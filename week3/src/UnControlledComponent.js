import React, { Component } from 'react';

class UnControlledComponent extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.inputRef = React.createRef();
    }
    
    handleChange = (newText) => {
        console.log(newText);
        //we can access the value from input element using below statement
        console.log(this.inputRef.current.value);
        //we will get the DOM element here and we can modify the value here
        this.inputRef.current.value = "Value set on onChange";
    }
    render() {
        return (
            <div className="App2">
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        ref={this.inputRef}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />                     
                </div>
            </div>
            
        );
    }
}
export default UnControlledComponent;


//Reference: https://css-tricks.com/working-with-refs-in-react/