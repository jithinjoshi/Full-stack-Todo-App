import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi';
import { getTodos, updateTodo } from '../../api/endpoints';


const TodoItems = () => {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        getTodos().then((data)=>{
            setTodos(data?.data)
            console.log(data)
        })
    },[]);

    const handleEdit = ({id})=>{
       

    }

    const handleDelete = ()=>{

    }
  return (
    <div className="mt-8">
          {todos?.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center p-4 border border-gray-300 rounded-md mb-4"
            >
              <input
                type="radio"
                className="mr-4"
                // Add onChange handler to update the selected todo status
              />
              <div className="flex-grow">
                <h4 className="font-semibold">{todo.title}</h4>
                <p className="text-gray-600">{todo.description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => handleEdit(todo._id)}
                >
                  <FiEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDelete(todo._id)}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
  )
}

export default TodoItems