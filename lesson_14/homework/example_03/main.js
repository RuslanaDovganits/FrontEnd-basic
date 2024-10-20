const links = [
    {
        text: "Home",
        url: "/home",
        order: 1
    },
    {
        text: "About Us",
        url: "/about",
        order: 5
    },
    {
        text: "Services",
        url: "/services",
        order: 4
    },
    {
        text: "Contact",
        url: "/contact",
        order: 3
    },
    {
        text: "Blog",
        url: "/blog",
        order: 2
    }
];




const sortedArray = [...links].sort(
    
    (a,b) => {
       return a.order - b.order
    }
);
console.log(sortedArray);