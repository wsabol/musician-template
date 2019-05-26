<?
$App = "";
require_once('_php_common.php');
cors();

header('Content-Type: application/json');

chdir('..');
$data = array();
$files = glob('assets/look/*', GLOB_BRACE);
foreach($files as $file) {
  $size = getimagesize($file);

  array_push($data, array(
    'filename' => $file,
    'aspect' => $size[0] / $size[1]
  ));
}

echo json_encode($data);
?>
