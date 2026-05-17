const express = require('express')  
const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const products = [
    {
        name: 'Lenevo Laptop',
        price: 10.99,
        description: 'This laptop is perfect for everyday use and offers great performance for its price. It features a sleek design, a powerful processor, and ample storage space, making it ideal for both work and entertainment purposes.'
    },
    {
        name: 'Dell XPS Laptop',
        price: 19.99,
        description: 'This laptop is perfect for everyday use and offers great performance for its price. It features a sleek design, a powerful processor, and ample storage space, making it ideal for both work and entertainment purposes.'
    },      
    {
        name: 'HP Spectre Laptop',
        price: 15.99,
        description: 'This laptop is perfect for everyday use and offers great performance for its price. It features a sleek design, a powerful processor, and ample storage space, making it ideal for both work and entertainment purposes.'
    },
    {
        name: 'Apple MacBook Pro',
        price: 25.99,
        description: 'This laptop is perfect for everyday use and offers great performance for its price. It features a sleek design, a powerful processor, and ample storage space, making it ideal for both work and entertainment purposes.'
    }, 
    {
        name: 'Asus ROG Laptop',
        price: 18.99,
        description: 'This laptop is perfect for everyday use and offers great performance for its price. It features a sleek design, a powerful processor, and ample storage space, making it ideal for both work and entertainment purposes.' 
    }, 
    {
        name: 'Acer Predator Laptop',
        price: 12.99,
        description: 'This laptop is perfect for everyday use and offers great performance for its price. It features a sleek design, a powerful processor, and ample storage space, making it ideal for both work and entertainment purposes.'
    }
];

app.get('/', (req, res) => {
    res.render('dashboard');
});

app.get('/products', (req, res) => {
    res.render('products', { products });
});

app.listen(3000, () => {
    console.log('Server is running at 3000 port!')
});


// Cannot GET /app.use(express.urlencoded(%7B%20extended:%20true%20%7D));app.use(express.static('public'));app.set('view%20engine',%20'ejs'); how to solve this error?
// This error occurs because you are trying to access the route '/app.use(express.urlencoded({ extended: true });app.use(express.static('public'));app.set('view engine', 'ejs');' which is not defined in your Express application.
// To solve this error, make sure you are accessing the correct route defined in your Express application. In this case, you should access the root route '/' or '/products' instead of the incorrect route mentioned in the error message.