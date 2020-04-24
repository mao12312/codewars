<?php
$f = fopen("csv/sample.csv", "r");

while ($line = fgetcsv($f)) {
    print_r($line);
}

fclose($f);
