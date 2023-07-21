# MERN Stack Todo Application

This is a Todo Application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to manage their tasks by adding, updating, and deleting them. The front-end is implemented using React.js for a user-friendly interface, and the back-end is built with Node.js and Express.js. MongoDB is used as the database to store tasks.

## Live Demo

The application is hosted on GitHub Pages and can be accessed through the following link: [MERN Todo App](https://mt-todo.pages.dev/).

## Features

- Add new tasks with a title and description.
- Display the list of tasks with options to mark tasks as completed or delete them.
- Update the title and description of existing tasks.
- Form validation to ensure users enter valid data for the tasks.
- RESTful APIs for communication between front-end and back-end.
- Error handling and appropriate status codes for API responses.
- MongoDB used as the database to store tasks.
- Pagination for managing large task lists.
- Responsive design for optimal use on different devices.

## Installation

To run the application locally, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/jithinjoshi/Full-stack-Todo-App
```

2. Navigate to the project directory and install dependencies using npm:

```bash
cd your-repo
npm install
```

3. Create a `.env` file in the root directory and provide the necessary environment variables, such as MongoDB connection string and JWT access token secret, and Refresh token secret.

4. Start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## RESTful APIs

The application uses RESTful APIs to communicate between the front-end and back-end. Here are the API endpoints:

- `GET /api/todo/todos` - Retrieves the list of tasks.
- `POST /api/todo/create-todos` - Adds a new task.
- `PUT /api/todo/delete/:id` - delete an existing task by ID.
- `DELETE /api/todo/edit` - update a task by ID.


This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by opening issues or pull requests. If you have any questions or feedback, please don't hesitate to contact us. Happy task managing!
