import React from 'react';
import * as EmailValidator from 'email-validator';

export default class ValidateForm extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            name: '',
        };
    }

    handleEmail = (evt) => {
        this.setState({email: evt.target.value});
    }

    handleName = (evt) => {
        this.setState({name: evt.target.value})
    }

    handleSubmit = (evt) => {
        if (!this.canBeSubmitted() || EmailValidator.validate(this.state.email) === false) {
            evt.preventDefault();
            return;
        }
        // const email = EmailValidator.validate(this.state.email);

        const { email, name } = this.state;
        alert(`SUCCESS! You signed up with email: ${email} name: ${name}`);
    }

    canBeSubmitted() {
        const { email, name } = this.state;
        return (
            email.length > 0 &&
            name.length > 7
        );
    }

    render(){
        const isEnabled = this.canBeSubmitted();
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                <br></br>
                <input 
                    type="text"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <br></br>
                <button disabled={!isEnabled}>Submit</button>
            </form>
        )
    }
}