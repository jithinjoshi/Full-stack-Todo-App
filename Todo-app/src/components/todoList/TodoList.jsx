
import React, { useState } from "react";

const TodoApp = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [addingTodo, setAddingTodo] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    const handleSidebarDisable = () => {
        if (window.innerWidth >= 768) {
            setSidebarOpen(false);
        }
    };

    const handleAddTodoToggle = () => {
        setAddingTodo(!addingTodo);
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <nav className="bg-red-500 px-6 py-3 flex items-center justify-between">
                <div className="text-lg font-semibold text-white">Todo App</div>
                <div className="flex items-center">
                    {sidebarOpen ? (
                        <button
                            className="p-2 ml-2 bg-gray-300 rounded-md focus:outline-none"
                            onClick={handleSidebarClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button
                            className="p-2 ml-2 bg-gray-300 rounded-md focus:outline-none"
                            onClick={handleSidebarToggle}
                            onBlur={handleSidebarDisable}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    )}
                    <button className="p-2 ml-2 bg-gray-300 rounded-md focus:outline-none">
                        Logout
                    </button>
                </div>
            </nav>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className={`${sidebarOpen ? "block" : "hidden"} md:block md:w-1/4 bg-gray-50`}>
                    <div className="py-4 px-10">
                        <ul className="space-y-3">
                            <li className="text-gray-700 cursor-pointer">
                                <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                                    Today
                                </div>
                            </li>
                            <li className="text-gray-700 cursor-pointer">
                                <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                                    Upcoming
                                </div>
                            </li>
                            <li className="text-gray-700 cursor-pointer">
                                <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                                    Completed
                                </div>
                            </li>
                            <li className="text-gray-700 cursor-pointer">
                                <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                                    Incompleted
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-full bg-white">
                    <div className="py-4 px-6 border-b">
                        <h4 className="text-lg font-semibold">July 19, 2023</h4>
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
                                <input
                                    type="text"
                                    placeholder="Enter title"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Enter description"
                                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md resize-none h-40 focus:outline-none focus:ring focus:ring-blue-500"
                                ></textarea>
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
                                        onClick={handleAddTodoToggle}
                                    >
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                                        Add Todo
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;


