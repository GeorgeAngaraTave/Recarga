
<table>
		<tr>
			<td><input type="button" id="btn_regresar" value="Regresar"></td>
		</tr>
	</table>
<?php

	echo $this->Form->create('User');
	echo $this->Form->input('names', array('label' => 'Número de Celular'));
	echo $this->Form->end();

	echo $this->Html->script('http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js');
	echo $this->Html->script(array('funcion'));

?>


<div id="formrecarga" style="display:none">

<form method="post" id="formulario"> 
	<table>
		<tr>
			<td>Inserte valor recarga:</td>
			<td><input type="text" name="valor_recarga"><div id="valorhiden"></div></td>
			<td><input type="button" id="btn_enviar" value="Recargar">
			</td> 
		</tr>
	</table>
</form>

</div>

<div id="confrecarga"></div>

<div id="loescrito"></div>