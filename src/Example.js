/*
import React, {Component} from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this)
    }


    render() {
        return (
            <div>
                <p>You cklicked {this.state.count} times</p>
                <button onClick={this.addCount}>Click me</button>
            </div>
        );
    }
    addCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

}

export default Example;*/
import React, { useState } from 'react';


function Example(){
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count + 1)}}>Click me</button>
        </div>
    )
}

export default Example;