
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Используем CORS
app.use(cors());

const mas = [
    { keyword: "tenders", name: "Chicken tenders", price: 300, kind: "meat", 
        category: "chicken", count: "270 g", image: "/images/tenders.jpg" },
    { keyword: "wings", name: "Chicken wings", price: 240, kind: "juicy", 
        category: "chicken", count: "300 g", image: "/images/wings.jpg" },
    { keyword: "bites", name: "Chicken bites", price: 400, kind: "meat", 
        category: "chicken", count: "330 g", image: "/images/bites.webp" },
    { keyword: "legs", name: "Chicken legs", price: 290, kind: "juicy", 
        category: "chicken", count: "400 g", image: "/images/legs.jpg" },
    { keyword: "basketBig", name: "Basket 3X", price: 680, kind: "basket", 
        category: "chicken", count: "800 g", image: "/images/basketBig.jpg" },
    { keyword: "basketLight", name: "Basket", price: 500, kind: "basket", 
        category: "chicken", count: "600 g", image: "/images/basketLight.jpg" },
    { keyword: "burgerLight", name: "YamOne", price: 90, kind: "light", 
        category: "burgers", count: "130 g", image: "/images/burgerLight.webp"},
    { keyword: "burgerBig", name: "Tastyness", price: 350, kind: "big", 
        category: "burgers", count: "380 g", image: "/images/burgerBig.webp" },
    { keyword: "burgerMedium", name: "Mmmmm....", price: 230, kind: "medium", 
        category: "burgers", count: "250 g", image: "/images/burgerMid.jpg" },
    { keyword: "burgerLight2", name: "Delicious!", price: 130, kind: "light", 
        category: "burgers", count: "180 g", 
        image: "/images/burgerLight2.webp"},
    { keyword: "burgerBig2", name: "Miracle", price: 290, kind: "big", 
        category: "burgers", count: "320 g", image: "/images/burgerBig2.png" },
    { keyword: "burgerMid2", name: "IWannaMoreOFTHIS", 
        price: 250, kind: "medium",
        category: "burgers", count: "260 g", image: "/images/burgerMid2.jpg" },
    { keyword: "sticks", name: "Cheese sticks", price: 300, kind: "veg", 
        category: "snacks", count: "200 g", image: "/images/sticks.webp" },
    { keyword: "fries", name: "French fries", price: 230, kind: "veg", 
        category: "snacks", count: "170 g", image: "/images/fries.jpg" },
    { keyword: "shrimps", name: "Tender shrimps", price: 499, kind: "shrimps", 
        category: "snacks", count: "300 g", image: "/images/shrimps.jpg" },
    { keyword: "nuggets", name: "Nuggets", price: 170, kind: "chicken", 
        category: "snacks", count: "220 g", image: "/images/nuggets.webp" },
    { keyword: "greek", name: "Greek salad", price: 250, kind: "veg", 
        category: "snacks", count: "280 g", image: "/images/greek.jpg" },
    { keyword: "cezar", name: "Cezar salad", price: 290, kind: "veg", 
        category: "snacks", count: "250 g", image: "/images/cezar.png" },
    { keyword: "limon", name: "Limon", price: 215, kind: "cold", 
        category: "drinks", count: "300 мл", image: "/images/limon.webp" },
    { keyword: "berry", name: "Berry", price: 180, kind: "cold", 
        category: "drinks", count: "300 мл", image: "/images/berry.jpg" },
    { keyword: "coffee", name: "Coffee", price: 200, kind: "hot", 
        category: "drinks", count: "300 мл", image: "/images/coffee.webp" },
    { keyword: "tea", name: "Green tea", price: 120, kind: "hot", 
        category: "drinks", count: "200 мл", image: "/images/tea.jpeg" },
    { keyword: "coke", name: "Coke", price: 140, kind: "cold", 
        category: "drinks", count: "195 мл", image: "/images/coke.jfif" },
    { keyword: "chocatate", name: "Hot chocalate", price: 240, kind: "hot", 
        category: "drinks", count: "240 мл", image: "/images/chocalate.jpg" },
    { keyword: "cheesecake", name: "Cheesecake", 
        price: 200, kind: "withadrink", 
        category: "deserts", count: "160 g", image: "/images/cheesecake.webp" },
    { keyword: "pie", name: "Jam pie", price: 80, kind: "withadrink", 
        category: "deserts", count: "60 g", image: "/images/desert.webp" },
    { keyword: "icecream", name: "Icecream", price: 140, kind: "icecream", 
        category: "deserts", count: "100 g", image: "/images/icecream2.webp" },
    { keyword: "donut", name: "Donut", price: 100, kind: "withadrink", 
        category: "deserts", count: "90 g", image: "/images/ponchik.jfif" },
    { keyword: "carrot", name: "Carrot", price: 120, kind: "healthy", 
        category: "deserts", count: "210 g", image: "/images/carrot.webp" },
    { keyword: "apple", name: "Apple chips", price: 120, kind: "heathy",
        category: "deserts", count: "140 g", image: "/images/apple.jpg" }
];

app.get('/api/dishes', (req, res) => {
    res.json(mas); // Отправляем весь массив в формате JSON
});

// Запускаем сервер
app.listen(port, () => {
    console.log(`API сервер работает на порту ${port}`);
});