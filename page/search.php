<?
	include "../data/config.php";

	$voting = "";
	
	if(!$db) {
		echo "Error : Unable to open database\n";
	} 
	
	$key = $_GET['key'];
	$array = array();
	$sql = "SELECT firstname, lastname 
			FROM candidate 
			WHERE firstname
			LIKE '".$key."%'";
	
	$result = pg_query($db, $sql);
	
	while($row = pg_fetch_assoc($result)) {
		$array[] = $row["firstname"]." ".$row["lastname"];
	}
	echo json_encode($array);
	
?>