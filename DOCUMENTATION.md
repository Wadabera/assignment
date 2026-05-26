# Project Documentation: Mini Website Build
**Prepared by: GADDISE MOKONNON RESELVED**

## 1. Executive Summary
This project is a high-performance, responsive mini-website built to demonstrate modern web development standards. It utilizes a **Node.js** backend with the **Express** framework and **EJS** for dynamic server-side rendering. The project focuses on accessibility, user experience (UX), and interactive design without the use of outdated frames.

---

## 2. Architecture & Technologies
- **Runtime Environment**: Node.js
- **Backend Framework**: Express.js
- **Templating Engine**: EJS (Embedded JavaScript)
- **Styling**: Modern CSS (Variables, Flexbox, Grid)
- **Fonts**: Google Fonts (Poppins)
- **Deployment**: Local Server (Port 3000)

---

## 3. Core Requirements Implementation

### A. Interconnected Web Pages
The application consists of three primary views managed by a central layout:
1.  **Home ([index.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/index.ejs))**: Features a hero welcome and an interactive gallery.
2.  **Products ([products.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/products.ejs))**: Displays a comprehensive service comparison table.
3.  **Contact ([contact.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/contact.ejs))**: Houses the primary functional POST form.
4.  **Search ([search.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/search.ejs))**: A dedicated results page for GET requests.

### B. Navigation Menu (Flexbox)
- **Implementation**: Located in [main.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/layouts/main.ejs).
- **Design**: Built using **CSS Flexbox** for perfect alignment.
- **Interactivity**: Includes active page highlighting and hover-state animations.

### C. Data Table (Comparison)
- **Implementation**: Found in [products.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/products.ejs).
- **Features**: A comparison of "Basic", "Professional", and "Enterprise" tiers.
- **Responsiveness**: Wrapped in a `table-wrapper` for horizontal scrolling on mobile devices.

### D. Functional Forms (GET/POST)
- **POST Form (Contact)**: Sends user data to the server. Includes backend validation for 'Name', 'Email', and 'Message'.
- **GET Form (Search)**: Integrated into the header. Sends queries via URL parameters to the `/search` route.

### E. Image Gallery (CSS Grid)
- **Implementation**: Found in [index.ejs](file:///c:/Users/Baha/OneDrive/Desktop/GA/views/index.ejs).
- **Design**: Utilizes **CSS Grid** with `auto-fit` for automatic responsiveness.
- **Accessibility**: Every image includes a descriptive `alt` tag.
- **Visuals**: Hover effects with overlays and scaling for enhanced interactivity.

### F. Dynamic Elements
1.  **Search Bar**: A functional header element providing real-time navigation.
2.  **Current Date**: JavaScript-driven footer element that updates to the current system date.

---

## 4. Visual Expression & Responsiveness
- **Typography**: Uses 'Poppins' for a clean, professional look.
- **Animations**: Implemented `@keyframes fadeIn` for smooth page entry.
- **Mobile First**: Media queries in [style.css](file:///c:/Users/Baha/OneDrive/Desktop/GA/public/css/style.css) handle screen sizes from 480px up to 1200px+.
- **No Frames**: The layout is purely structural CSS, ensuring SEO friendliness and modern browser compatibility.

---

## 5. Setup and Execution
1.  **Installation**: `npm install`
2.  **Start Server**: `node server.js`
3.  **Access**: Navigate to `http://localhost:3000`

---

## 6. Netlify Deployment
This project is configured for seamless deployment on **Netlify** using serverless functions.
- **Config File**: `netlify.toml`
- **Serverless Wrapper**: `serverless-http`
- **Function Entry**: `functions/api.js`

### Deployment Steps:
1. Connect this repository to your Netlify account.
2. Netlify will automatically detect the `netlify.toml` configuration.
3. The build command `npm install` will run, and the site will be live.
4. All routes are automatically redirected to the serverless function.

---

**© 2026 GADDISE MOKONNON RESELVED**
