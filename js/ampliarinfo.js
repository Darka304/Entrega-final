export function ampliarInfo(evento){

        let tituloModal = document.getElementById("tituloInfo")
        let imagenModal = document.getElementById("fotoInfo")
        let precioModal = document.getElementById("precioModal")
        let descripcionModal = document.getElementById("descripcionModal")

        imagenModal.src = evento.target.parentElement.querySelector("img").src
        tituloModal.textContent = evento.target.parentElement.querySelector("h4").textContent
        precioModal.textContent = evento.target.parentElement.querySelector("h5").textContent
        descripcionModal.textContent = evento.target.parentElement.querySelector("p").textContent
    }