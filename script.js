//Objetos productos
class Producto{
    constructor (name, id, precio, stock,){
    this.name =  name;
    this.id = id;
    this.precio = precio
    this.stock = stock;
    }
}

const producto1= new Producto ("Sauron", 1, 1500, 5)
const producto2= new Producto ("Frodo Bolson", 2, 2000, 5)
const producto3= new Producto ("Smaug", 3, 1800, 3)
const producto4= new Producto ("Stormtrooper", 4, 800, 25)
const producto5= new Producto ("Darth Vader", 5, 1200, 10)
const producto6= new Producto ("Han Solo", 6, 1400, 15 )
const producto7= new Producto ("Sauron", 7, 1750, 5)
const producto8= new Producto ("Balrog", 8, 3500, 3)
const producto9= new Producto ("The Mandalorian", 9, 2800, 8)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

console.log(productos)



//Formulario de usuario
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
}

const formulario = document.getElementById("userForm")

const usuarios = []

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    let username= document.getElementById("userInput").value
    let email = document.getElementById("mailInput").value
    let password = document.getElementById("passwordInput").value
    const user = new User (username, email, password)
    usuarios.push(user)
    formulario.reset()
    console.log(usuarios)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
})

const usuarioExitoso = document.getElementById("userCheck")

if (localStorage.getItem(usuarios)) {
    JSON.parse(localStorage.getItem("usuarios"))
}
console.log(usuarios)

if(usuarios){
    usuarioExitoso.innerHTML+=`
        <p> Bienvenido ${usuarios.username}</p>
    ` 
}

/*
const usuarioExitoso = document.getElementById("exito")
function lenghtUsers(usuarios) {
    var length = usuarios.length;
    for (var i = 0; i < length; i++) {
        console.log(usuarios[i]);
    }
    return
}

let longitud=  lenghtUsers (usuarios)
console.log(lenghtUsers)

if (longitud > 0) {
    usuarioExitoso.innerHTML+=`
    <div class= "container">
        <p> El usuario ha sido creado con exito</p>
    </div>
    ` 
}
*/

//Codigo de productos y carrito

const boton1 = document.getElementById("boton1")

boton1.addEventListener("click",() => {
    const divProductos = document.getElementById("divProductos")

    productos.forEach(producto =>{
        divProductos.innerHTML += `
        <div class= "card p-5 m-2 w-25 bg-info" id= "card ${producto.id}">
            <p>${producto.name}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
            <button type="button" id="botonCarrito${producto.id}" class="btn btn-secondary">Agregar a carrito</button>
        </div>
        `
    })
})  

const botonCarrito = document.getElementById("botonCarrito")

const precioProductos = productos.map


function listo() {
    let removerItems
    
}


