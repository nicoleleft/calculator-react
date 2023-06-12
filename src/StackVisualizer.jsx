import React, { useState } from 'react';

const StackVisualizer = () => {
  // initialized w/ empty array to store the items in the stack
  const [stack, setStack] = useState([]);   
  // initialized w/ empty string to store the value entered in the
  // input field
  const [value, setValue] = useState('');   

  // function to push an input to the stack
  const pushToStack = () => {
    // If there is a value in the input box, push
    if (value) {
      // add the value to the rest of the stack (...stack) in a new array
      // in this order to make the pushed value appear on top of the stack
      setStack([value, ...stack]);
      setValue('');
    }
  };

  // function to pop the top of the stack
  const popFromStack = () => {
    // if stack has items in it, pop the top one
    if (stack.length > 0) {
      const updatedStack = stack.slice(1);
      setStack(updatedStack);
    }
  };

  return (
    <div>
      <h2>Stack Visualizer</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>
      <div>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackVisualizer;
