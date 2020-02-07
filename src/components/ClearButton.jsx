import React from "react";
import "./ClearButton.css";

const ClearButton = props => {
  return (
    <div className="clear-btn" onClick={props.handlerClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
