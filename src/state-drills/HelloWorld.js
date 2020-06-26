import React from 'react'

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.state = { who: 'world'}
    }
    clickFriend = () => {
        this.setState({who: 'friend!'})
    }
    clickReact = () => {
        this.setState({who: 'React!'})
    }
    clickWorld = () => {
        this.setState({who: 'world!'})
    }
    render(){
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.clickFriend}>Friend</button>
                <button onClick={this.clickReact}>React</button>
                <button onClick={this.clickWorld}>World</button>
            </div>
        )
    }
}

export default HelloWorld