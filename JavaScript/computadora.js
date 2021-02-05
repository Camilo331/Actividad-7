// Definimos un evento de entrada con el mouse para el hipervinculo Inicio
$("#inicio").mouseover(function(){
    $(this).css("font-size", "20px")
    $(this).css("font-family", "segoe print")
})
// Definimos un evento de salida con el mouse para el hipervinculo Inicio
$("#inicio").mouseout(function(){
    $(this).css("font-size", "17px")
    $(this).css("font-family", "cursive")
})



// Definimos un evento de entrada con el mouse para el video de YouTube
$("#video").mouseover(function(){
    $(this).css("transform", "scale(1.2)")
}) 
// Definimos un evento de salida con el mouse para el video de YouTube
$("#video").mouseout(function(){
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


// Definimos un evento de entrada con el mouse para el Footer
$("#nombre").mouseover(function(){
    $(this).css("font-family", "segoe print")
    $(this).css("font-size", "30px")
})
// Definimos un evento de salida con el mouse para el Footer
$("#nombre").mouseout(function(){
    $(this).css("color", "red")
})