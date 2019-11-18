<?php

function get_filename_from_title($title) {
	return strtolower(str_replace(array('  ', ' '), '-', preg_replace('/[^a-zA-Z0-9 s]/', '', trim($title))));
}