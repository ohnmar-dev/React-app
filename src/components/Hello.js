import { Component } from "react";
import React from "react";
class Hello extends React.Component {
    state = {
     message:"Use class component state" 
    }

    changeMessage = ()=>{
        this.setState( {
            message:"Change message"
        })
    }
    handdleClick = ()=>{
        alert("Class Click")
    }
    render = () =>{ 
        const {name} = this.props
        return (
        <div>
            <h1>{name} {this.state.message}</h1>
            <button onClick={this.changeMessage}> Change</button>
            <button onClick={this.handdleClick}>class Change</button>
        </div>
     )
    }
}



export default Hello