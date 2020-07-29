import React from "react";

function ActionButton(props) {
  return <button onClick={props.click} style={props.style}>{props.text}</button>;
}
export default ActionButton;
