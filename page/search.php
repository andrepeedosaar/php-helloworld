<?
	include "../data/config.php";

	$voting = "";
	
	if(!$db) {
		echo "Error : Unable to open database\n";
	} 
	
	$key = $_GET['key'];
	$array = array();
	$result = pg_query($db, "SELECT firstname, lastname FROM candidate WHERE firstname ILIKE '%{$key}%'");
	
	while($row = pg_fetch_assoc($result)) {
		$array[] = $row["firstname"]." ".$row["lastname"];
	}
	echo json_encode($array);
	
?>