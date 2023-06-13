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
      {/* stack.slice(1) works here by creating a new array that
          starts from index 1, effectively removing the item at 
          index 0 and simulating the behavior of the stack*/}
      const updatedStack = stack.slice(1);
      setStack(updatedStack);
    }

    // trigger the animation by adding a class to the stack container
    document.querySelector('.stack-container').classList.add('pop-animation');

    // remove the animation class after a short delay
    setTimeout(() => {
      document.querySelector('.stack-container').classList.remove('pop-animation');
    }, 300);
  };

  return (
    <>
      <p className='title'>Stack Visualizer</p>
      <div className='input-container'>
        <input
          type="text"
          placeholder='Enter an item to put on the stack...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>
      <div>
        {/* use unordered list to wrap the list items to represent
            the stack visually */}
        <ul className='stack-container'>
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
    </>

  );
};

export default StackVisualizer;
