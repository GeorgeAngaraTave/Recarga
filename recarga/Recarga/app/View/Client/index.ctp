<h1>Hola </h1>
<?php
$list = array(
    'Languages' => array(
        'English' => array(
            'American',
            'Canadian',
            'British',
        ),
        'Spanish',
        'German',
    )
);
echo $this->Html->nestedList($list);
?>