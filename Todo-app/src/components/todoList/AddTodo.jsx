import React, { useState } from 'react';
import { createTodo } from '../../api/endpoints';
import TodoItems from './TodoItems';


const AddTodo = () => {
    const [addingTodo, setAddingTodo] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const today = new Date();
    const formattedDate = today.toDateString();

    const handleAddTodoToggle = () => {
        setAddingTodo(!addingTodo);
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const credentials = {
            title,
            description,
            date: formattedDate,
        };

        createTodo(credentials)
            .then((result) => {
                console.log(result);
                resetForm();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
    <div className="flex flex-col w-full bg-white">
      <div className="py-4 px-6 border-b">
        <h4 className="text-lg font-semibold">Today</h4>
      </div>
      <div className="flex-grow p-6">
        {!addingTodo && (
          <button
            className="p-2 bg-green-500 text-white rounded-md mb-4"
            onClick={handleAddTodoToggle}
          >
            + New Task
          </button>
        )}
        {addingTodo && (
          <div className="w-3/5 mx-auto">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md resize-none h-40 focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
                  onClick={handleAddTodoToggle}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Todo List */}
        <TodoItems/>
        
      </div>
    </div>
  </>
    );
};

export default AddTodo;
