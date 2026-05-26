const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
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
