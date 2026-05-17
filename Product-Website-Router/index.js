const express = require('express');
const app = express();
const path = require('path');

const productRoutes = require('./routes/productRoutes');
// ye likhne se productRoutes ka file import ho jayega aur usme jo bhi routes defined hai wo use kar sakte hai
// ye router ke through hum apne routes ko modularize kar sakte hai aur apne code ko clean aur maintainable bana sakte hai
// agar hum apne routes ko alag file me define karte hai to hum apne main file me sirf router ko import kar ke use kar sakte hai aur apne routes ko alag file me define kar ke apne code ko clean aur maintainable bana sakte hai

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
    res.render('dashboard');
});


// Use router
app.use('/products', productRoutes);
// meko ager isme hi ek variable bhejna ho to meko is tarah se bhejna padega
// app.use('/products', (req, res, next) => {
//     req.products = products;
//     uper vale line ka matlab hai ki jab bhi koi request /products route pe aayegi to usme products variable ko attach kar do aur phir next() function call kar do taki agla middleware ya route handler execute ho sake
// matlab ki simple shabdo me jab bhi koi request /products route pe aayegi to usme products variable ko attach kar do taki us route handler me us variable ko access kar sake aur phir next() function call kar do taki agla middleware ya route handler execute ho sake
// req.products ka matlab hai ki hum req object me ek naya property bana rahe hai jiska naam products hai aur usme products variable ki value assign kar rahe hai taki us route handler me us variable ko access kar sake
//     next();
// }, productRoutes);



app.listen(3000, () => {
    console.log('Server running at 3000 port');
});
