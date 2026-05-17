const express = require('express');
const router = express.Router();
// ye likne se express ke router ko import kar ke use kar sakte hai aur apne routes ko define kar sakte hai 
// router ke through hum apne routes ko modularize kar sakte hai aur apne code ko clean aur maintainable bana sakte hai
// agar hum apne routes ko alag file me define karte hai to hum apne main file me sirf router ko import kar ke use kar sakte hai aur apne routes ko alag file me define kar ke apne code ko clean aur maintainable bana sakte hai

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
    }
];

router.get('/products', (req, res) => {
    res.render('products', { products });
});

module.exports = router;


