import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default AddTodo;