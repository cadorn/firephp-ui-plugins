<?php

require_once('Insight/Program/JavaScript.php');

class FirePHP_UIPlugins_ExampleBasic_Plugin extends Insight_Program_JavaScript {

    public function onMessage($message) {

        $data = $message->getData();

        $this->sendSimpleMessage($data); // or
//        FirePHP::to('plugin')->plugin($this->getAlias())->sendSimpleMessage($data);

    }
}
