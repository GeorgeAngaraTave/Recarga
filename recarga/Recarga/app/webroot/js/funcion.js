$("document").ready(
function() {

  $("#btn_regresar").click(function(){
    window.location.href = 'index';

  });

  volorSegundo();

   $('#UserNames').keypress(operaEvento);
   $('#UserNames').keydown(operaEvento);
   $('#UserNames').keyup(operaEvento);
$('#btn_consumo').hide();
   $('#ConsumoNames').keypress(operaEventoConsumo);
   $('#ConsumoNames').keydown(operaEventoConsumo);
   $('#ConsumoNames').keyup(operaEventoConsumo);


   $("#btn_cambiar").click(function(){
      $('#formseguro').show();
      $('#btn_cambiar').hide();
      actulizarCosto();
   });

    $("#btn_consumo").click(function(){
    
       $('#formconsumo').show();
       $('#btn_consumo').hide();
        actulizarConsumo();
      });


   $("#btn_enviar").click(function(){
      $.ajax({
               type: "post",
               url: "add.json",
               data: $("#formulario").serialize(),
               beforeSend: function() {
                     $('#loescrito').html();
                     },
               success: function(data){
                
                var jdatos = JSON.parse(data);
                $('#loescrito').empty();
                $('#loescrito').val('');
                $.each(jdatos, function(index){

                   $.ajax({
                       type: "json",
                       url: location.href+"/"+jdatos[index].usuario+".json",
                       beforeSend: function() {
                             $('#loescrito').html();
                             },
                       success: function(data){
                        
                             var html = '';
                             var form = '';
                             var valor = '';

                            html += '<table> <CAPTION>Histirico de recargas</CAPTION><tr><td><strong>Nombre</strong></td><td><strong>Valor recarga</strong></td><td><strong>Saldo actual</strong></td><td><strong>Segundos Consumidos</strong></td><td><strong>Segundos Disponible</strong></td></tr>';

                          var json =JSON.parse(data);
                          var jdatos = json.listado_subcategorias;
                     
                           $.each(jdatos, function(index){
                            var jlogrecarga = jdatos[index].logrecarga;
                            var jUser = jdatos[index].User;
                            if(jUser  == 'No existen Datos'){
                              $('#loescrito').empty();
                              $('#loescrito').val('');
                            }  

                            valor = jUser.id;
                              html += "<tr><td>"+jUser.last_name+"</td><td>"+ jlogrecarga.valor_recarga+"</td><td>"+ jlogrecarga.saldo_actual+"</td><td>"+ jlogrecarga.segundos_consumidos+"</td><td>"+ jlogrecarga.segundos_disponibles+"</td></tr>"; 
                             
                           })

                           form = '<input type="hidden" name="usuario" value = "'+valor+'">'; 
                           html += "</table>"; 
                            $('#formrecarga').show();
                            $('#valorhiden').html(form);
                            $('#loescrito').html(html);
                       }
                     });

                      $.ajax({
                       type: "json",
                       url: "viewUtimaRecarga/"+jdatos[index].usuario+".json",
                       beforeSend: function() {
                             $('#loescrito').html();
                             },
                       success: function(data){

                          var html = '';
                          html += '<table> <CAPTION>Recarga relizada</CAPTION><tr><td><strong>Nombre</strong></td><td><strong>Valor recarga</strong></td><td><strong>Saldo actual</strong></td><td><strong>Segundos Consumidos</strong></td><td><strong>Segundos Disponible</strong></td></tr>';

                          var json =JSON.parse(data);
                          var jdatos = json.valor_recarga;
                     
                           $.each(jdatos, function(index){ 

                            var jlogrecarga = jdatos[index].logrecarga;
                            var jUser = jdatos[index].User;
                             html += "<tr><td>"+jUser.last_name+"</td><td>"+ jlogrecarga.valor_recarga+"</td><td>"+ jlogrecarga.saldo_actual+"</td><td>"+ jlogrecarga.segundos_consumidos+"</td><td>"+ jlogrecarga.segundos_disponibles+"</td></tr>"; 
                             
                           })
                          html += "</table><hr>"; 
                          $('#confrecarga').html(html);
                           
                       }
                     }); 

                   })
            
               }
             });
     });

});

function operaEvento(evento){

  $.ajax({
               type: "json",
               url: location.href+"/"+$(this).val()+".json",
               beforeSend: function() {
                     $('#loescrito').html();
                     },
               success: function(data){

                     var html = '';
                     var form = '';
                     var valor = '';

                    html += '<table> <tr><td><strong>Nombre</strong></td><td><strong>Valor recarga</strong></td><td><strong>Saldo actual</strong></td><td><strong>Segundos Consumidos</strong></td><td><strong>Segundos Disponible</strong></td></tr>';

                  var json =JSON.parse(data);
                  var jdatos = json.listado_subcategorias;

                     if(jdatos.User  == 'No existen Datos'){
                              $('#loescrito').empty();
                              $('#loescrito').val('');
                    }
             
                   $.each(jdatos, function(index){
                    var jlogrecarga = jdatos[index].logrecarga;
                    var jUser = jdatos[index].User;
                      
                    valor = jUser.id;
                      html += "<tr><td>"+jUser.last_name+"</td><td>"+ jlogrecarga.valor_recarga+"</td><td>"+ jlogrecarga.saldo_actual+"</td><td>"+ jlogrecarga.segundos_consumidos+"</td><td>"+ jlogrecarga.segundos_disponibles+"</td></tr>"; 
                     
                   })

                   form = '<input type="hidden" name="usuario" value = "'+valor+'">'; 
                   html += "</table>"; 
                    $('#formrecarga').show();
                    $('#valorhiden').html(form);
                    $('#loescrito').html(html);
               }
             });
}

function volorSegundo(){
    var path = getAbsolutePath();
    
    $.ajax({
        type: "json",
        url: location.href+".json",
           beforeSend: function() {
              $('#costomin').html();
            },
            success: function(data){
              var html = '';
              var form = '';
              var valor = '';

              html += '<table> <tr><td><strong>Segundo</strong></td><td><strong>Valor</strong></td><td><strong>Moneda</strong></td></tr>';

              var json =JSON.parse(data);
              var jdatos = json.valor_segundos;

              $.each(jdatos, function(index){
               var valocosto = jdatos[index].CostoSegundo;
             
                var jcosto = valocosto.costo;
                var jsegundo = valocosto.segundo;
                var jtipo = valocosto.tipo;
              
                html += "<tr><td>"+jsegundo+"</td><td>"+jcosto+"</td><td>"+jtipo+"</td></tr>"; 
                           
              })

            form = '<input type="hidden" name="usuario" value = "'+valor+'">'; 
            html += "</table>"; 
              
              $('#valorhiden').html(form);
              $('#costomin').html(html);
            }
    });
}

function volorConsumo(celular){
   
    
    $.ajax({
        type: "json",
        url: location.href+"/"+celular+".json",
           beforeSend: function() {
              $('#costomin').html();
            },
            success: function(data){
                  var html = '';
                  var form = '';
                     var valor = '';

                  html += '<table> <tr><td><strong>segndos consumido</strong></td><td><strong>Costo</strong></td><td><strong>Costo segudo</strong></td></tr>';

                  var json =JSON.parse(data);
                  var jdatos = json.valor_consumo;
             
                   $.each(jdatos, function(index){
                     var jconsumo = jdatos[index].Consumo;
                      var jcosto = jconsumo.costo;
                      var jcosto_segundo = jconsumo.costo_segundo;
                      var jtiempo = jconsumo.tiempo;
                      valor = jconsumo.usuario;
                      html += "<tr><td>"+jtiempo+"</td><td>"+jcosto+"</td><td>"+ jcosto_segundo+"</td></tr>"; 
                   })

                   form = '<input type="hidden" name="usuario" value = "'+valor+'">'; 
                   html += "</table>"; 
                  $('#formrecarga').show();
                  $('#valorhiden').html(form);
                  $('#loescrito').html(html);
            }
    });
}

function actulizarCosto(){

  $("#btn_actualizar").click(function(){
      $.ajax({
               type: "post",
               url: "addCosto.json",
               data: $("#formulario_segundo").serialize(),
               beforeSend: function() {
                     $('#costomin').html();
                     },
               success: function(data){
                  $('#costomin').empty();
                  $('#costomin').val('');
                  volorSegundo();
               
                   $('#btn_cambiar').show();
                  
                   $('#valor_recarga').empty();
                   $('#valor_recarga').val('');
                    $('#formseguro').hide();
               }
             });
     });
}

function actulizarConsumo(){

  $("#btn_actualizar").click(function(){
      $.ajax({
               type: "post",
               url: "addConsumo.json",
               data: $("#formulario_consumo").serialize(),
               beforeSend: function() {
                     $('#costomin').html();
                     },
               success: function(data){

                var json =JSON.parse(data);
                  var jdatos = json.message;
                $('#loescrito').empty();
                $('#loescrito').val('');
                 
                 volorConsumo(jdatos.celular);
               
                $('#btn_consumo').hide();
                  
                $('#valor_recarga').empty();
                $('#valor_recarga').val('');
                $('#formconsumo').show();
               }
             });
     });
}

function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

function operaEventoConsumo(evento){

  $.ajax({
               type: "json",
               url: location.href+"/"+$(this).val()+".json",
               beforeSend: function() {
                     $('#loescrito').html();
                     },
               success: function(data){

                     var html = '';
                     var form = '';
                     var valor = '';

                    html += '<table> <tr><td><strong>segndos consumido</strong></td><td><strong>Costo</strong></td><td><strong>Costo segudo</strong></td></tr>';

                  var json =JSON.parse(data);
                  var jdatos = json.valor_consumo;
                  console.log(jdatos);
             
                   $.each(jdatos, function(index){
                     $('#btn_consumo').show();
                     var jconsumo = jdatos[index].Consumo;
                      var jcosto = jconsumo.costo;
                      var jcosto_segundo = jconsumo.costo_segundo;
                      var jtiempo = jconsumo.tiempo;
                      valor = jconsumo.usuario;
                      html += "<tr><td>"+jtiempo+"</td><td>"+jcosto+"</td><td>"+ jcosto_segundo+"</td></tr>"; 
                   })

                   form = '<input type="hidden" name="usuario" value = "'+valor+'">'; 
                   html += "</table>"; 
                    $('#formrecarga').show();
                    $('#valorhiden').html(form);
                    $('#loescrito').html(html);
               }
             });
}