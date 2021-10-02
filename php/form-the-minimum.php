<?php
function minValue($arr) {
    $UniqueNum = array_unique($arr);
    sort($UniqueNum);
   var_dump((int)join("", $UniqueNum));

}

minValue([6, 7, 8, 7, 6, 6]);