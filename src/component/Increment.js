import React from 'react';

export default class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            value: 'default',
            submittedValue: ''
        };
    }
    increment = () => {
        this.setState({
            score: this.state.score + 1
        })
    }
    decrement = () => {
        this.setState({
            score: this.state.score - 1
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submittedValue: this.state.value
        })
    }

    render() {
        return (
            <div>
                <h1>Score: {this.state.score}</h1>
                <p><b>This value is changing :</b> {this.state.value}</p>
                <p><b>This value was submitted :</b> {this.state.submittedValue}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter text</label>
                    <input onChange={this.handleChange} value={this.state.value}/>
                </form>
            </div>
        );
    }
}