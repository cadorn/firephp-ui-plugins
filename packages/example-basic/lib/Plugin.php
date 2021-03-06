<?php

require_once('Insight/Program/JavaScript.php');

class FirePHP_UIPlugins_ExampleBasic_Plugin extends Insight_Program_JavaScript {

    public function onMessage($message) {

        $data = $message->getData();

        if($message->getType()=='simple-response') {

            return array("Got It!", "received" => $data);

        } else {

            $this->sendSimpleMessage($data); // or
//            FirePHP::to('plugin')->plugin($this->getAlias())->sendSimpleMessage($data);
            
        }
    }
}
