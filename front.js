$(document).ready(function () {
    $("#botonListarPosts").click(function(){  
        $.ajax({
            url: 'http://127.0.0.1:8000/api/posts', 
            type: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
            },
            success: function (data) {
                console.log(data);
                alert("¡Todos los Posts han sido obtenidos con éxito!");
            },
            error: function () {
                alert("No se ha encontrado ningún Post publicado");
            }
        });
    });

    $("#botonObtenerPost").click(function() {
        var id = $("#idObtenerPost").val();
        $.ajax({
            url: 'http://127.0.0.1:8000/api/posts/' + id,
            type: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
            },
            success: function (data) {
                console.log(data);
                alert('¡Has obtenido el Post que buscabas!');

            },
            error: function () {
                alert('No se encontro el post buscado');
            } 
        })
    });

    $("#botonCrearPost").click(function() {
        var datosFormulario = {
            "id_autor" : $("#id").val(),
            "titulo" : $("#titulo").val(),
            "fecha" : $("#fecha").val(),
            "contenido" : $("#contenido").val()
        };

        $.ajax({
            url: 'http://127.0.0.1:8000/api/posts',
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
            },
            data: JSON.stringify(datosFormulario),

            success: function (data) {
                console.log(data);
                alert('¡Se creo el Post perfectamente!');

            },
            error: function () {
                alert('No se ha podido crear el Post');
            } 
        })
    });


});
