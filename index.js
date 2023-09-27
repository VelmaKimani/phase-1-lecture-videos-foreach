let books = [
    {
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        price: 16.00,
        inventory: 5,
    },
    {
        title: "JavaScript & JQuery: Interactive Front-End Web Development",
        price: 10.50,
        inventory: 30,
    },
    {
        title: "JavaScript: The Good Parts",
        price: 25.00,
        inventory: 2,
    },
    {
        title: "JavaScript: The Definitive Guide",
        price: 60.00,
        inventory: 8,
    },
    {
        title: "You don\'t know JS",
        price: 18.95,
        inventory: 0,
    },
];

books.forEach(logTitle);

// books.forEach(function logTitle(item){
//     console.log(item.title.toUpperCase());
// });


// books.forEach( item => {
//     console.log(item.title.toLowerCase());
// });


// function loopThrough(inventory, foo){
//     for(let item of inventory){
//     foo(item)
// }
// }


function logTitle(item){
    console.log(item.title.toUpperCase());
}