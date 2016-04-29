<?php

 echo $this->Form->create('User');
 echo $this->Form->input('names', array('label' => 'Nombre'));
 echo $this->Form->input('email', array('label' => 'Correo Electronico'));
 echo $this->Form->end('Guardar');