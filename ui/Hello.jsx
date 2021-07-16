import React, {useState} from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    Meteor.call('insert', {
      title: `my title ${counter}`,
      url: `https://myurl${counter}.com`
    });
  };
  const incrementAsync = () => {
    setCounter(counter + 1);
    Meteor.call('insertAsync', {
      title: `my title ${counter}`,
      url: `https://myurl${counter}.com`
    });
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <button onClick={incrementAsync}>Click Me Async</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
