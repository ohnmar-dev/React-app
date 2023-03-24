import React from "react";
import { Component } from "react";
const Child = ({clickHanddler}) => {
    return (
        <div>
        <button onClick={clickHanddler}>Child Click</button>
        </div>
    )
}
export default Child;