function form_reset() {
    var primer_nombre = document.getElementById('primer_nombre').value
    var segundo_nombre = document.getElementById('segundo_nombre').value
    var primer_apellido = document.getElementById('primer_apellido').value
    var segundo_apellido = document.getElementById('segundo_apellido').value
    var mensaje = `usuario ${primer_nombre} ${segundo_nombre} ${primer_apellido} ${segundo_apellido} pronto lo contactaremos`
    alert(mensaje)
    document.getElementById('form_contactenos').reset()
}


// Definimos estilo al primer parrafo(parrafo_1).
$("#parrafo_1").css("font-size", "20px")
$("#parrafo_1").css("font-family", "cursive")
$("#parrafo_1").css("text-align", "justify")
$("#parrafo_1").css("color", "white")
$("#parrafo_1").css("letter-spacing", "1px")


// Definimos un evento de entrada con el mouse al hipervinculo inico.
$("#inicio").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo incio
$("#inicio").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinvulo de contactenos
$("#contacto").mouseover(function(){
    $(this).css("font-size", "20px")
}) 
// Definimos un evento de salida con el mouse al hipervinculo de contactenos
$("#contacto").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo campos relacionados
$("#campos").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo campos relacionados
$("#campos").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Arquitectura
$("#arquitectura").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Arquitectura
$("#arquitectura").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Biomimética
$("#biomimetica").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Biomimética
$("#biomimetica").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Diseño asistido por computadora
$("#diseño").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Diseño asistido por computadora
$("#diseño").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Diseño mecanico
$("#mecanico").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Diseño mecanico
$("#mecanico").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Diseño grafico
$("#grafico").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Diseño grafico
$("#grafico").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Diseño de interiores
$("#interiores").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Diseño de interiores
$("#interiores").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse al hipervinculo Ergonomia
$("#ergonomia").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse al hipervinculo Ergonomia
$("#ergonomia").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse a una Imagen
$("#imagen").mouseover(function(){
    $(this).css("transform", "scale(1.3)")
})
// Definimos un evento de salida con el mouse a una imagen
$("#imagen").mouseout(function(){
    $(this).css("transform", "scale(0.9)")
})


// Definimos un evento de entrada con el mouse para la imagen de Facebook
$("#facebook").mouseover(function(){
    $(this).css("transform", "scale(1.3)")
})
// Definimos un evento de salida con el mouse para la imagen de Facebook
$("#facebook").mouseout(function(){
    $(this).css("transform", "scale(0.9)")
})


// Definimos un evento de entrada con el mouse para la imagen de Instagram
$("#instagram").mouseover(function(){
    $(this).css("transform", "scale(1.3)")
})
// Definimos un evento de salida con el mouse para la imagen de Instagram
$("#instagram").mouseout(function(){
    $(this).css("transform", "scale(0.9)")
})


// Definimos un evento de entrada con el mouse para la imagen de Twitter
$("#twitter").mouseover(function(){
    $(this).css("transform", "scale(1.3)")
})
// Definimos un evento de salida con el mouse para la imagen de Twitter
$("#twitter").mouseout(function(){
    $(this).css("transform", "scale(0.9)")
})