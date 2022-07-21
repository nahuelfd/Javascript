const products = ["remeras", "pantalones", "abrigos", "calzado", "accesorios", "camisas"]
const accessories = ["cinturones", "medias", "perfumes", "mochilas"]

for(let i = 0; i < products.length; i++){
    console.log(products[i]);
}


products.push("jeans", "trajesDeBanio");
console.log(products);
products.pop();

accessories.unshift("calcetines", "corbatas", "gorras", "remedios")
accessories.push("bolsos", "sombreros")

console.log(accessories.indexOf("perfumes"));
console.log(products.includes("trajes"));
products.push("trajes");
console.log(products.join(", "));
console.log(accessories.join(", "));

const remove = (name) => {
    let index = accessories.indexOf(name);

    if(index != -1){
        accessories.splice(index, 1);
    }
    console.log(accessories);
}

remove("remedios");
console.log(accessories);


class Jeans {
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

const jean1 = new Jeans("Antonio", "M", 100);
const jean2 = new Jeans("Enzo", "L", 110);
const jean3 = new Jeans("Vitto", "L", 115);
const jean4 = new Jeans("Massimo", "XL", 120);

class Shoes {
    constructor(name, size, price, style){
        this.name = name;
        this.size = size;
        this.price = price;
        this.style = style;
    }
}

const shoes1 = new Shoes("Milano", "40-45", 200, "dress");
const shoes2 = new Shoes("Verona", "40-44", 210, "dress");
const shoes3 = new Shoes("Firenze", "42-46", 230, "dress");
const shoes4 = new Shoes("Sicilia", "39-45", 180, "urban");
const shoes5 = new Shoes("Calabria", "39-45", 190, "urban");

class MustHave{
    constructor(info, sold){
        this.item = info.item;
        this.name = info.name;
        this.size = info.size;
        this.style = info.style;
        this.price = parseFloat(info.price);
        this.sold = sold;
    }

    sell(){
        this.sold = true
    }

    taxCalculator(){
        return this.price * 0.21
    }

    finalPrice(){
        return this.price * 1.21
    }
}

const item1 = new MustHave({item: "gloves", name: "Gianni", size: "Unique", style: "formal", price: 85});
const item2 = new MustHave({item: "socks", name: "Classic", size: "42,44", style: "classic", price: 10});
const item3 = new MustHave({item: "sunGlasses", name: "Franco", size: "Unique", style: "urban", price: 90});
const item4 = new MustHave({item: "watch", name: "Lucciano", size: "Unique", style: "urban, sport", price: 120});


console.log(shoes3);
console.log(jean4);
console.log(item2);

for(const properties in item2){
    console.log(item2[properties]);
}

for(const properties in shoes3){
    console.log(shoes3[properties]);
}

item4.sell();
console.log(item4);





let title = document.getElementById("title");

title.innerHTML = "Coder Jeans";

let seccion = parseInt(prompt("Ingrese el numero 1 para ir al Sale, o el numero 2 para los New arrivals"));

if(Number(seccion === 1)){
    title.innerHTML = "<h2>Sale hasta 50% off</h2>";
    title.className = "gold";
}else if(Number(seccion === 2)){
    title.innerHTML = "<h2>New arrivals</h2>";
    title.className = "gold";
}else{
    title.innerHTML = "Bienvenido a Coder Jeans";
    title.className = "dark";
}


let addproducts = [];
do{
    let adds = toLowerCase(prompt("Ingrese el producto a añadir. Una vez que haya terminado, ingrese exit"));
    if (adds === exit){
        break;
    }else{
        product = adds;
        size = prompt("Ingrese el talle disponible desde el XS hasta el XXL");
        description = prompt("Ingrese la descripccion del producto");
        addproducts.push( new item(product, size, description));
    }
}
while (adds != exit)
console.log(addproducts);

for (let product of addproducts) {
    let container = document.createElement("div")
    container.innerHTML = `<p> Nombre: ${item.product}</p>
    <p> Talle: ${item.size} </p>
    <p> Detalle: ${item.description} </p>`;
    document.body.appendChild(container);
}



