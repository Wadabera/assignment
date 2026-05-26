const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve paths correctly in both local and Netlify Lambda environments
// In Netlify Lambda, files are placed at /var/task/ (LAMBDA_TASK_ROOT)
// __dirname will be /var/task/functions (where api.js resides)
const getProjectRoot = () => {
  // LAMBDA_TASK_ROOT is the standard Netlify environment variable for Lambda
  // It points to /var/task where all files are placed
  if (process.env.LAMBDA_TASK_ROOT) {
    return process.env.LAMBDA_TASK_ROOT;
  }
  return __dirname;
};

const root = getProjectRoot();

// Debug logging (remove after confirming it works)
console.log('__dirname:', __dirname);
console.log('LAMBDA_TASK_ROOT:', process.env.LAMBDA_TASK_ROOT);
console.log('Resolved root:', root);
console.log('Views path:', path.join(root, 'views'));

// Middleware
app.use(express.static(path.join(root, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('views', path.join(root, 'views'));
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home - Mini Website', active: 'home' });
});

app.get('/products', (req, res) => {
    res.render('products', { title: 'Products - Comparison', active: 'products' });
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.render('search', { 
        title: 'Search Results', 
        active: '', 
        query: query || 'Nothing' 
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us', active: 'contact', message: null });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Simple validation
    if (!name || !email || !message) {
        return res.render('contact', { 
            title: 'Contact Us', 
            active: 'contact', 
            error: 'All fields are required!',
            message: null 
        });
    }
    // In a real app, you'd save this to a database
    res.render('contact', { 
        title: 'Contact Us', 
        active: 'contact', 
        message: `Thank you, ${name}! Your message has been received.`,
        error: null
    });
});

// Export for serverless
module.exports = app;

// Listen only if not running as a function
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
