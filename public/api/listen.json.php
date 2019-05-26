<?
$App = "";
require_once('_php_common.php');
cors();

header('Content-Type: application/json');

chdir('..');
$data = array();
$files = glob('assets/audio/*.mp3', GLOB_BRACE);
foreach($files as $file) {
  array_push($data, array(
    'filename' => $file,
    'title' => pathinfo($file, PATHINFO_FILENAME)
  ));
}

echo json_encode($data);
?>
