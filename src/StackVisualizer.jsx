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
        {/* use unordered list to wrap the list items to represent
            the stack visually */}
        <ul>
          {/* use stack.map(function) to iterate over each item in the "stack"
              array, and for each item we define an anonymous function
              (item, index) => (...) that creates a new list item for 
              each element being added to the stack and give it a unique 
              identifier, which is the key (the index) and the content of 
              the list item is in fact the item and will be displayed to the screen */}
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackVisualizer;
