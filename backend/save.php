<?php
include 'func.inc.php';

if (!empty(@$_POST['title'])) {
	$filename = get_filename_from_title($_POST['title']);

	$file = 'data/' . $filename . '.json';

	// foreach ($_POST as $key => $value) {
	// 	settype($_POST[$key], gettype($value));
	// }

	file_put_contents($file, $_POST['data']);
}
