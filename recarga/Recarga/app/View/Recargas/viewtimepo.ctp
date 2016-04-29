<h2>Actualización valos cosato por segundo</h2>


<div id="costomin"></div>


<div id="formseguro" style="display:none">
<form method="post" id="formulario_segundo"> 
	<table>
		<tr>
			<td>Inserte valor:</td>
			<td><input type="text" name="valor_recarga" id="valor_recarga"></td>
			<td><input type="button" id="btn_actualizar" value="Actualizar">
			</td> 
		</tr>
	</table>
			
</form>

</div>


<table>
		<tr>
			<td><input type="button" id="btn_regresar" value="Regresar"></td>
			<td><input type="button" id="btn_cambiar" value="Cambiar Valor"></td> 
		</tr>
	</table>



<div id="loescrito"></div>



<?php

	echo $this->Html->script('http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js');
	echo $this->Html->script(array('funcion'));

?>

