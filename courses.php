<?php
if ($_GET['faculty'] == "Science") {
  echo <<<HERE_DOC
[ {name: 'MGL7361', description: 'Conception logiciel'}, {name:'BIO101', description: 'Introduction à la biologie'}]
HERE_DOC;
} else if ($_GET['faculty'] == "Droit") {
  echo <<<HERE_DOC
[{name: 'Droit101', description: 'Remy'}, {name: 'Droit102', description: 'Arif'}, {name: 'Droit103', description: 'JC'}]
HERE_DOC;
} else if ($_GET['faculty'] == "Politique") {
  echo <<<HERE_DOC
  []
HERE_DOC;
} else {
  echo <<<HERE_DOC
[{name: 'Erreur', description: 'Impossible de trouver de trouver de cours pour cette faculte'}]
HERE_DOC;
}
?>
