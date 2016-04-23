<?php
	
	include "../data/config.php";
	
	$voting = "";
	
	if(!$db) {
		echo "Error : Unable to open database\n";
	} 
	
	$key = $_GET['key'];
	
	$array = array();
	//SQL localserveris testimiseks
	/*$sql = "SELECT * 
			FROM person 
			WHERE firstname 
			LIKE '".$key."%'";
	*/
	//Õige SQL lause andmebaasiste andmete kätte saamiseks
	//LAUSE TÖÖTAB HEROKUS ÕIGESTI
	$sql = "SELECT firstname, lastname
			FROM candidate
			WHERE firstname 
			LIKE '".$key."%'";
	
	
	//HTML output format
	$html = '';
	$html .= '<li class="result">';
	$html .= '<a target="_blank" href="urlString">';
	$html .= '<h3>nameString</h3>';
	$html .= '<h4>functionString</h4>';
	$html .= '</a>';
	html .= '</li>';
	
	$result = pg_query($db, $sql);
	
	if (!$result) { 
		echo "Problem with query " . $query . "<br/>"; 
		echo pg_last_error(); 
		exit(); 
	} 
	
	while($row = pg_fetch_assoc($result)) {
		$array[$row['id']] = $row["firstname"]." ".$row["lastname"];
	}
	
	// Check If We Have Results
	if (isset($array)) {
		foreach ($array as $result) {

			// Format Output Strings And Hightlight Matches
			$display_function = preg_replace("/".$search_string."/i", "<b class='highlight'>".$search_string."</b>", $result['function']);
			$display_name = preg_replace("/".$search_string."/i", "<b class='highlight'>".$search_string."</b>", $result['name']);
			$display_url = 'http://php.net/manual-lookup.php?pattern='.urlencode($result['function']).'&lang=en';

			// Insert Name
			$output = str_replace('nameString', $display_name, $html);

			// Insert Function
			$output = str_replace('functionString', $display_function, $output);

			// Insert URL
			$output = str_replace('urlString', $display_url, $output);

			// Output
			echo($output);
		}
	}else{

		// Format No Results Output
		$output = str_replace('urlString', 'javascript:void(0);', $html);
		$output = str_replace('nameString', '<b>No Results Found.</b>', $output);
		$output = str_replace('functionString', 'Sorry :(', $output);
	
	echo json_encode($array);
	
