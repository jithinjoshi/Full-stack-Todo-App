
import React, { useState } from "react";
import AddTodo from "./AddTodo";

const TodoApp = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


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
                <AddTodo/>
            </div>
        </div>
    );
};

export default TodoApp;


