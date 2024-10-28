$(document).ready(function () {
    $("#botonListarPosts").click(function(){  
        $.ajax({
            url: 'http://127.0.0.1:8001/api/posts', 
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
            url: 'http://127.0.0.1:8001/api/posts/' + id,
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
        var id_autor = $("#id_autor").val();
        var titulo = $("#titulo").val();
        var fecha = $("#fecha").val();
        var contenido = $("#contenido").val();
        
        var datos = {
            "id_autor" : id_autor,
            "titulo" : titulo,
            "fecha" : fecha,
            "contenido" : contenido,
        }

        $.ajax({
            url: 'http://127.0.0.1:8001/api/posts',
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
            },
            data: JSON.stringify(datos),

            success: function (data) {
                console.log(data);
                alert('¡Se creo el Post perfectamente!');

                var nuevoPost = $("#cardsTemplate").clone();
                nuevoPost.removeAttr("card__id"); 
                nuevoPost.find(".card__title").text(data.titulo);
                nuevoPost.find(".card__date").text(`Autor: ${data.id_autor} | Fecha: ${data.fecha}`);
                nuevoPost.find(".card__content").text(data.contenido);
                nuevoPost.show();

                $("#postContainer").append(nuevoPost);

            },
            error: function () {
                alert('No se ha podido crear el Post');
            } 
        })
    });

});


