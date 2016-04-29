<table>
		<tr>
			<td><input type="button" id="btn_regresar" value="Regresar"></td>
		</tr>
	</table>
<?php

	echo $this->Form->create('Consumo');
	echo $this->Form->input('names', array('label' => 'Número de Celular'));
	echo $this->Form->end();

	echo $this->Html->script('http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js');
	echo $this->Html->script(array('funcion'));

?>

<input type="button" id="btn_consumo" value="Insertar Consumo">
<div id="formconsumo" style="display:none">
<form method="post" id="formulario_consumo"> 
	<table>
		<tr>
			<td>Inserte Segundos consumidos:</td>
			<td><input type="text" name="valor_recarga" id="valor_recarga"><div id="valorhiden"></td>
			<td><input type="button" id="btn_actualizar" value="Actualizar">
			</td> 
		</tr>
	</table>
			
</form>

</div>


<div id="loescrito"></div>