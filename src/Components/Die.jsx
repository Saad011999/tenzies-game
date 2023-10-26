import React from "react";

export default function Die(props){
    const styles = {
        backgroundColor : props.isHeld ? "#59E391" : "white"
    }

    return(
       <div className="dieFace" onClick={props.holdDice} style={styles}>
        <h2 className="dieNum">{props.value}</h2>
       </div>
    )
}