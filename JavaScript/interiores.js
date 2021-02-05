// Definimos un evento de entrada con el mouse para el hipervinculo de Inicio
$("#inicio").mouseover(function(){
    $(this).css("font-size", "20px")
})
// Definimos un evento de salida con el mouse para el hipervinculo de Inicio 
$("#inicio").mouseout(function(){
    $(this).css("font-size", "17px")
})


// Definimos un evento de entrada con el mouse para una imagen(interiores_1)
$("#imagen").mouseover(function(){
    $(this).css("transform", "scale(1.3)")
}) 
// Definimos un evento de salida con el mouse para una imagen(interiores_1)
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