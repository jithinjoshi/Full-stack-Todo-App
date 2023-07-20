// SharedLayout.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/appSlice";
import { logoutUser, searchTodo } from "../../api/endpoints";

const SharedLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const accessToken = useSelector((state) => state?.app?.accessToken);
  const dispatch = useDispatch();

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

  const logoutHandler = () => {
    logoutUser().then((data) => {
      dispatch(logout())
      console.log(data?.data)
    })
  }


  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-red-500 px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold text-white">Todo App</div>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Search..."
          />
          <button
            className="absolute top-1 right-2 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {
            accessToken ? <button className="p-2 ml-2 bg-gray-300 rounded-md focus:outline-none" onClick={logoutHandler}>
              Logout
            </button>
              :
              <div>
                <Link to='/signin' className="p-2 ml-2 bg-gray-300 rounded-md focus:outline-none">
                  Signin
                </Link>
              </div>
          }

        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block md:w-1/4 bg-gray-50`}>
          <div className="py-4 px-10">
            <ul className="space-y-3">
              <li className="text-gray-700 cursor-pointer">
                <Link to="/">
                  <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                    Home
                  </div>
                </Link>
              </li>
              <li className="text-gray-700 cursor-pointer">
                <Link to="/completed">
                  <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                    Completed
                  </div>
                </Link>
              </li>
              <li className="text-gray-700 cursor-pointer">
                <Link to="/incompleted">
                  <div className="w-full hover:bg-gray-300 pl-2 pr-4 py-2 rounded-lg">
                    Incompleted
                  </div>
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
};

export default SharedLayout;
