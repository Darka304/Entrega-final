export function llenarTienda(){

    let productos = [
        {foto: 'img/comic1.jpg', nombre:"comic", precio:55000, descripcion:"Bola de Drac - Saga Satanás Cor Petit nº 01/04"},
        {foto: 'img/comic2.jpg', nombre:"comic", precio:55000, descripcion:"Bola de Drac - Saga Satanás Cor Petit nº 02/04"},
        {foto: 'img/esfera.jpg', nombre:"Esfera de 4 estrellas", precio:200000, descripcion:"Esfera de cristal de 4 estrellas 75mm + Base"},
        {foto: 'img/figura1.jpg', nombre:"Figura", precio:120000, descripcion:"Goku SSJ 11cm"},
        {foto: 'img/figura2.jpg', nombre:"Figura", precio:120000, descripcion:"Gogeta SSJ Blue 11cm"},
        {foto: 'img/gorra.jpg', nombre:"Gorra", precio:25000, descripcion:"Gorra negra - Maestro Roshi"},
        {foto: 'img/dvd.jpg', nombre:"DVD", precio:10000, descripcion:"Pelicula completa - Batalla de los dioses"},
        {foto: 'img/llavero1.jpg', nombre:"Llavero", precio:8000, descripcion:"Llavero - Símbolo Kame"},
        {foto: 'img/llavero2.jpg', nombre:"Llavero", precio:10000, descripcion:"Llavero - Esfera 4 estrellas"},
        {foto: 'img/peluche.jpg', nombre:"Peluche", precio:80000, descripcion:"Sheng Long"}
    
    ]
    
    let fila = document.getElementById("tarjetas")
    
    productos.forEach(function(producto){
        console.log(producto.nombre)
    
    
    let columna = document.createElement("div")
    columna.classList.add("col")
    
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    
    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src=producto.foto
    
    let titulo = document.createElement("h4")
    titulo.classList.add("titulo_tarjetas")
    titulo.textContent = producto.nombre
    
    let precio = document.createElement("h5")
    precio.classList.add("precio_tarjetas")
    precio.textContent = producto.precio + "$"
    
    let descripcion = document.createElement("p")
    descripcion.classList.add("descripcion_tarjetas")
    descripcion.textContent = producto.descripcion
    
    let boton = document.createElement("button")
    boton.classList.add("btn")
    boton.classList.add("boton-tarjeta")
    boton.classList.add("btn-warning")
    boton.textContent = "Ver imagen"
    
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    })

}

