import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.click}>ssss</button>
                <p>Меня зовут {this.props.name}</p>
                <div>{this.props.children}</div>
            </div>

        );
    }
}

export default Person;

