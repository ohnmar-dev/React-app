import React from "react";
// function Welcome(){
//     return <h1>Welcome to functional component</h1>

// }
// export const Welcome = ()=> <h1>Welcome to Arrow Functional hello</h1>
const Welcome = ({name,age,children}) => {
    // const {name,age,children} = props
    // console.log(props)
   const handdleClick = ()=>{
        alert("hello click")
    };
    return (
        <div>
            <h1>Welcome to {name} and {age }</h1>
            <p>{children}</p>
            <button onClick={handdleClick}>Click</button>
        </div>
    )
}
export default Welcome;

// export default Welcome;