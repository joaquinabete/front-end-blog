$(document).ready(function(){  
            
    var token = localStorage.getItem("accessToken");
    if(token != null)
        $(location).prop('href', './registro.html');
  
    $("#botonLogin").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        
        var data = {
            "username": username,
            "password": password,
            "grant_type" : "password",
            "client_id" : 8,
            "client_secret" : "tAgDsH2aSCfEUqUwFUlDqK3uKaaNipERmmqGEeA2"
        }
        jQuery.ajax({  
            url: 'http://localhost:8000/oauth/token',  
            type: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            data: JSON.stringify(data),
            
            success: function(resultado) {  
                alert("Inicio de sesion exitoso");
                localStorage.setItem("accessToken", resultado.access_token);
                $(location).prop('href', './crear-posts.html');
            },
            
            error: function(resultado){
                alert("Credenciales invalidas");
            } 
            
        });  
    });
    
});  