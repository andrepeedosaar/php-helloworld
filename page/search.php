<?php
	
	include "../data/config.php";
	
	$voting = "";
	
	if(!$db) {
		echo "Error : Unable to open database\n";
	} 
	
	$key = $_GET['key'];
	
	$array = array();
	//SQL localserveris testimiseks
	//$sql = 'SELECT * FROM person';
	
	//Õige SQL lause andmebaasiste andmete kätte saamiseks
	$sql = 'SELECT firstname, lastname
			FROM candidate
			WHERE firstname = '".$key."'';

	$result = pg_query($db, $sql);
	
	if (!$result) { 
		echo "Problem with query " . $query . "<br/>"; 
		echo pg_last_error(); 
		exit(); 
	} 
	
	while($row = pg_fetch_assoc($result)) {
		$array[$row['id']] = $row["firstname"]." ".$row["lastname"];
	}
	
	echo json_encode($array);
	
