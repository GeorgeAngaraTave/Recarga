<h2>Usuario</h2>
<?php


echo $this->Html->link(
    'Edita Usurio',
    ['controller' => 'Users', 'action' => 'add']);
echo "<br />";
echo $this->Html->link(
    'Costo Segúndo',
    ['controller' => 'Recargas', 'action' => 'index?val=1']);
	

?>

