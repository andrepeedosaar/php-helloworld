<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Valimistest</title>
	</head>
	<body>
		<nav id="main">
			<a href="?page=election_info/kov_info.php">Kohalikud valimised</a>
			<a href="?page=election_info/pres.php">Presidendi valimised</a>
			<a href="?page=election_info/rg_info.php">Riigikogu valimised</a>
		</nav>
		<section id="content">
			<?php require 'election_info/kov_info.php';?>
		</section>
		

