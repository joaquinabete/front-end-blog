$(document).ready(function () {
    $.ajax({
        url: 'http://127.0.0.1:8001/api/posts',
        type: 'GET', 
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        success: function (data) { 
            console.log(data.posts);
            $.each(data.posts, function(i, item) {
                $("#postsContainer").append(estilosPosts(item));
            });
        },
        error: function () {
            let noPostsMessage = $("#noPostsMessage");
            $("#noPostsmessage").text("No se encuentran posts disponibles");
        }
    });

    function redirigirIndex() {
        window.location.href = "../index.html"
    }
    
    $("#botonCrearPost").click(function () {
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
                "Content-Type": "application/json",
            },
            data: JSON.stringify(datos),

            success: function (data) {
                console.log("Datos recibidos: ", data);
                $("#postsContainer").append(estilosPosts(datos)); 
                redirigirIndex();      
            },
            error: function (err) {
                alert('No se ha podido crear el Post');
                console.log(err);
            }
        })
    });
    
    function estilosPosts(posts) {
        return `
            <article class="card__container">
                <p class="card__container-id">Publicación número ${posts.id_autor} existosa</p>
                <h3 class="card__container-title">Titulo: ${posts.titulo}</h3>
                <p class="card__container-date">Fecha: ${posts.fecha}</p>
                <p class="card__container-content">Contenido: ${posts.contenido}</p>
            </article>
        `
    }

});

