const buttonArray = ["All","Breakfast","Lunch","Shakes",];

const menuArray = [
    {
        name: "Buttermilk Pancakes",
        price: 500,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/breakfast1.jpg",
        category: "Breakfast",
    },
    {
        name: "Country Delight",
        price: 1000,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/breakfast2.jpeg",
        category: "Breakfast",
    },   
    {
        name: "Egg Attack",
        price: 900,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/breakfast3.jpg",
        category: "Breakfast",
    },   
    {
        name: "Diner Double",
        price: 1200,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/lunch1.jpg",
        category: "Lunch",
    },   
    {
        name: "Mutton Mandi",
        price: 2200,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/lunch2.jpg",
        category: "Lunch",
    },   
    {
        name: "Biryani",
        price: 600,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/lunch3.jpg",
        category: "Lunch",
    },   
    {
        name: "Godzilla Milkshake",
        price: 400,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/shake1.jpeg",
        category: "Shakes",
    },   
    {
        name: "Oreo Dream",
        price: 600,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/shake2.jpg",
        category: "Shakes",
    },   
    {
        name: "KitKat Shake",
        price: 500,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam numquam distinctio ea modi in possimus quam voluptas explicabo inventore?",
        image:"Asset/shake3.jpg",
        category: "Shakes",
    },
];
console.log(menuArray);

const btn = document.getElementById('buttons');
console.log(btn);
buttonArray.forEach((element) => {
    btn.innerHTML += `<button class="btn" onclick = "printMenu('${element}')">${element}</button>`
});

const menuDiv = document.querySelector(".card-section")
console.log(menuDiv);


function printMenu(menuCategory) {
    menuArray.filter((data) => {
        menuDiv.innerHTML = "";
        if(data.category.includes(menuCategory)) {
            return true;
        }
        else if(menuCategory == "All") {
            return true;
        }
    }).forEach((items) => {
            menuDiv.innerHTML += 
            `
            <div class="menu-section">
                <img src="${items.image}">
                    <div class="sub-menu">
                        <div class="title-price">
                            <h2>${items.name}</h2>
                            <h2 class="price">Rs. ${items.price}</h2>
                        </div>
                        <hr>
                        <p>${items.description}</p>
                    </div>
            </div>` 
});
}
printMenu("All");




