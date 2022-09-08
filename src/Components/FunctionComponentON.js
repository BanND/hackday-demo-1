//This will not work

import {Component} from "react";

function MyComponent() {
    return <input />;
}

export class FunctionComponentON extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    render() {
        return (
            <MyComponent ref={this.textInput} />
        );
    }
}
