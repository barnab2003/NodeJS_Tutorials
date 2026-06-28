

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000,
        stock: 10
    },
    {
        id: 2,
        name: "Mouse",
        price: 1000,
        stock: 50
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2500,
        stock: 20
    }
];
localStorage.setItem("products", JSON.stringify(products));

const itermarray = JSON.parse(localStorage.getItem("products"));

console.log(itermarray);