import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import ClearButton from "./components/ClearButton";
import "./styles.css";
import * as math from "mathjs";

const App = () => {
  const [input, setInput] = useState("");

  const displayToInput = val => {
    setInput(input + val);
  };

  const onEqualClick = () => {
    setInput(math.evaluate(input));
  };

  return (
    <div className="app">
      <Input input={input} />
      <div className="row">
        <Button handleClick={displayToInput}>7</Button>
        <Button handleClick={displayToInput}>8</Button>
        <Button handleClick={displayToInput}>9</Button>
        <Button handleClick={displayToInput}>/</Button>
      </div>
      <div className="row">
        <Button handleClick={displayToInput}>4</Button>
        <Button handleClick={displayToInput}>5</Button>
        <Button handleClick={displayToInput}>6</Button>
        <Button handleClick={displayToInput}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={displayToInput}>1</Button>
        <Button handleClick={displayToInput}>2</Button>
        <Button handleClick={displayToInput}>3</Button>
        <Button handleClick={displayToInput}>+</Button>
      </div>

      <div className="row">
        <Button handleClick={displayToInput}>.</Button>
        <Button handleClick={displayToInput}>0</Button>
        <Button handleClick={() => onEqualClick()}>=</Button>
        <Button handleClick={displayToInput}>-</Button>
      </div>
      <div className="row">
        <ClearButton handlerClear={() => setInput("")}>Clear</ClearButton>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
