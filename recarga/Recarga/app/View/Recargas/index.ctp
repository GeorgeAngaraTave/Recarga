<h2>Usuario</h2>
<?php


echo $this->Html->link(
    'Costo Segundo',
    ['controller' => 'Recargas', 'action' => 'viewtimepo']);
echo "<br />";
echo $this->Html->link(
    'Recargar Saldo',
    ['controller' => 'Recargas', 'action' => 'view/']);
echo "<br />";
echo $this->Html->link(
    'Consumo',
    ['controller' => 'Recargas', 'action' => 'viewconsumo/']);
	

?>

