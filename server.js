const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Find views and public directories - try multiple possible locations in Netlify Lambda
const findViewsPath = () => {
  const candidates = [
    __dirname,                                    // current directory (likely /var/task)
    path.join(__dirname, '..'),                  // parent (likely /var)
    '/var/task',                                 // explicit /var/task
    '/var/task/functions',                     // if in functions subdir
  ];
  
  // Add LAMBDA_TASK_ROOT if it exists and doesn't contain 'views'
  const taskRoot = process.env.LAMBDA_TASK_ROOT;
  if (taskRoot && taskRoot !== '/var') {
    candidates.push(taskRoot);
  }
  
  for (const candidate of candidates) {
    const viewsPath = path.join(candidate, 'views');
    console.log('Checking views path:', viewsPath);
    if (fs.existsSync(viewsPath)) {
      console.log('Found views at:', viewsPath);
      return candidate;
    }
  }
  // Default to __dirname if not found
  console.log('Views not found, using default:', __dirname);
  return __dirname;
};

const root = findViewsPath();

console.log('Final root:', root);
console.log('Views path:', path.join(root, 'views'));

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
