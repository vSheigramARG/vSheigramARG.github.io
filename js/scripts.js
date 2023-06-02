//---------Asociar eventos a los elementos------------
const formulario = document.querySelector(".formulario");
const reset = document.getElementById("reset");

//----------Evento de Submit--------------
formulario.addEventListener("submit", function(event){
    event.preventDefault();

    //Validación de datos
    const {apellido, correo, cantidad, categoria} = datos;

    if(nombre === "" || apellido === "" || correo === "" || cantidad === ""){
        mostrarMensaje("Alguno de los campos no se completó.", true);
        return;
    }
    //Enviar los datos al backend o informar error

    let precio = 200;
    if(datos.categoria === "Junior"){
        nuevoPrecio = datos.cantidad * (precio * 0.85) 
        console.log(nuevoPrecio)
    }else{
        if(datos.categoria === "Trainne"){
            nuevoPrecio = datos.cantidad * (precio * 0.5) 
            console.log(nuevoPrecio)
    }else{
        nuevoPrecio = datos.cantidad * (precio * 0.2) 
            console.log(nuevoPrecio)
    }

}

reset.addEventListener("click", function(event){
    totalAPagar.textContent = "Total a Pagar: $";
});



//--------------Reemplazar HTML-------------------
const totalAPagar = document.getElementById("total");

totalAPagar.textContent = "Total a Pagar: $" + nuevoPrecio;

});


//------------Creación de un objeto-----------
const datos = {
    nombre: "",
    apellido: "",
    correo: "",
    cantidad: "",
    categoria: ""
}

//---------------Obtener elementos de HTML------------
const nombre = document.querySelector("#inputNombre");
const apellido = document.querySelector("#inputApellido");
const correo = document.querySelector("#inputemail");
const cantidad = document.querySelector("#inputCantidad");
const categoria = document.querySelector("#inputCategoria");

nombre.addEventListener('input', function(e){
//    console.log(e.target.value);
});

apellido.addEventListener('input', function(e){
//    console.log(e.target.value);
});

correo.addEventListener('input', function(e){
//   console.log(e.target.value);
});

cantidad.addEventListener('input', function(e){
//    console.log(e.target.value);
});

categoria.addEventListener('input', function(e){
//    console.log(e.target.value);
});


//-------------Guardo valores en atributos del Objeto datos-------------
nombre.addEventListener('input', function(event){
    datos.nombre = event.target.value;
    console.log(datos.nombre);

    //Destructuring
    const {nombre} = datos;

    for(i=0 ; i<nombre.length ; i++){
        if(nombre.charCodeAt(i)>47 && nombre.charCodeAt(i)<58){
            mostrarMensaje("El nombre no puede contener números",true);
            return;
        }
    }
});


apellido.addEventListener('input', function(event){
    datos.apellido = event.target.value;
    console.log(datos.apellido);

    //Destructuring
    const {apellido} = datos;

    for(i=0 ; i<apellido.length ; i++){
        if(apellido.charCodeAt(i)>47 && apellido.charCodeAt(i)<58){
            mostrarMensaje("El apellido no puede contener números",true);
            return;
        }
    }
});

correo.addEventListener('input', function(event){
    datos.correo = event.target.value;
    console.log(datos.correo);
});

cantidad.addEventListener('input', function(event){
    datos.cantidad = event.target.value; 
    console.log(datos.cantidad);
});

categoria.addEventListener('input', function(event){
    datos.categoria = event.target.value;
    console.log(datos.categoria);
});

//---------------Funciones---------------------
function mostrarMensaje(mensaje, error){
    const respuesta = document.createElement("P");
    respuesta.textContent = mensaje;

    if(error){
        respuesta.classList.add("error");
    }else{
        respuesta.classList.add("correcto");
    }

    formulario.appendChild(respuesta);
    setTimeout(()=> {
        respuesta.remove();
    }, 1000);
}