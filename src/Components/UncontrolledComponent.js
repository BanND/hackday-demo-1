import React from 'react';

export class UncontrolledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }
    handleChange = (message) => {
        console.log(message);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        placeholder="Typing here bro..."
                        onChange={(event) => this.handleChange(event.target.value)}
                        ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
