import { llenarTienda } from "./llenado.js";
import {ampliarInfo} from "./ampliarinfo.js"
llenarTienda()

let contenedorTienda=document.getElementById("tarjetas")
contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){
        let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
        ampliarInfo(evento)
        modalInfo.show()

    }

})