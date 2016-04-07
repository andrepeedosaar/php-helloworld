<?
include "../data/config.php";

	if(!$db) {
		echo "Error : Unable to open database\n";
	} 
	
	$html = '';
	$html .= '<li class="result">';
	$html .= '<a target="_blank" href="urlString">';
	$html .= '<h3>nameString</h3>';
	$html .= '<h4>functionString</h4>';
	$html .= '</a>';
	$html .= '</li>';
	
	$search_string = preg_replace("/[^A-Za-z0-9]/", " ", $_POST['query']);
	$search_string = $db->pg_escape_string($search_string);
	
	if (strlen($search_string) >= 1 && $search_string !== ' ') {
		$query = 'SELECT * FROM search WHERE function LIKE "%'.$search_string.'%" OR name LIKE "%'.$search_string.'%"';
	}
	
	$result = $db->query($query);
	while($results = $result->fetch_array()) {
		$result_array[] = $results;
	}
	
	if (isset($result_array)) {
		foreach ($result_array as $result) {

			$display_function = preg_replace("/".$search_string."/i", "<b class='highlight'>".$search_string."</b>", $result['function']);
			$display_name = preg_replace("/".$search_string."/i", "<b class='highlight'>".$search_string."</b>", $result['name']);
			$display_url = 'http://php.net/manual-lookup.php?pattern='.urlencode($result['function']).'&lang=en';

			$output = str_replace('nameString', $display_name, $html);

			$output = str_replace('functionString', $display_function, $output);

			$output = str_replace('urlString', $display_url, $output);

			echo($output);
		}
	}
	else {

		$output = str_replace('urlString', 'javascript:void(0);', $html);
		$output = str_replace('nameString', '<b>No Results Found.</b>', $output);
		$output = str_replace('functionString', 'Sorry :(', $output);

		echo($output);
	}
	
?>