# Mini Website Project

This project is a simple, interconnected mini website built using **Node.js**, **Express**, and **EJS**. It demonstrates modern web development practices, including responsive design using Flexbox and CSS Grid.

## Features

### 1. Interconnected Pages
The website consists of three main pages:
- **Home**: Welcome message and an image gallery.
- **Products**: A data table comparing different service tiers.
- **Contact**: A functional form with validation and feedback.

### 2. Navigation Menu
A consistent navigation bar is available on all pages, built using **Flexbox** for layout and alignment. It highlights the current active page.

### 3. Data Table
The **Products** page features a comparison table for service tiers (Basic, Professional, Enterprise), styled for readability and responsiveness.

### 4. Functional Forms (GET/POST)
The website demonstrates two types of functional forms:
- **GET Form**: The **Search Bar** in the header uses the `GET` method to send queries to the server, which then displays results based on the URL parameters.
- **POST Form**: The **Contact** page includes a form that sends data to the server via a `POST` request. 
    - **Validation**: The server checks for required fields (name, email, message).
    - **Feedback**: Displays a success message upon successful submission or an error message if validation fails.

### 5. Image Gallery
The **Home** page contains a responsive image gallery built using **CSS Grid**. Every image includes descriptive `alt` text for accessibility.

### 6. Dynamic Elements
The website includes multiple dynamic elements:
- **Search Functionality**: A functional `GET` form in the navigation menu.
- **Current Date**: The footer displays the current date using JavaScript, updating automatically.

### 7. Modern Layout (No Frames)
The entire site is built without the use of frames. It relies on:
- **CSS Flexbox**: Used for the navigation bar and general alignment.
- **CSS Grid**: Used for the responsive image gallery layout.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Vanilla CSS (Flexbox & Grid)
- **Middleware**: body-parser, express-ejs-layouts

## How to Run
1. Ensure Node.js is installed.
2. Run `npm install` to install dependencies.
3. Start the server with `node server.js`.
4. Open your browser and navigate to `http://localhost:3000`.
