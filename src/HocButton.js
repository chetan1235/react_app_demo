import React from "react";

function HocButton(props){
    return (
        <button style={{ "backgroundColor": props.color}}>{ props.name}</button>
    )
    
}

export default HocButton;