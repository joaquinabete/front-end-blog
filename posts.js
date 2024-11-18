$(document).ready(function () {
    $.ajax({
        url: 'http://127.0.0.1:8001/api/posts',
        type: 'GET', 
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        success: function (data) { 
            $.each(data, function(i, item) {
                $("#postsContainer").append(data[i].titulo + " - " + data[i].fecha + " - " + data[i].contenido);
            });
        },
        error: function () {
            let noPostsMessage = $("#noPostsMessage");
            $("#noPostsmessage").text("No se encuentran posts disponibles");
        }
    });
    

    $("#botonCrearPost").click(function () {
        var id_autor = $("#id_autor").val();
        var titulo = $("#titulo").val();
        var fecha = $("#fecha").val();
        var contenido = $("#contenido").val();

        var datos = {
            "id_autor": id_autor,
            "titulo": titulo,
            "fecha": fecha,
            "contenido": contenido,
        }

        $.ajax({
            url: 'http://127.0.0.1:8001/api/posts',
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify(datos),

            success: function (data) {
                console.log("Datos recibidos: ", data);
                alert('¡Se creo el Post perfectamente!');
            },
            error: function () {
                alert('No se ha podido crear el Post');
            }
        })
    });
    
});

