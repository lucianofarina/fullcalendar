<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

/*
include('config.php');
try
{
	$dbh = new PDO('mysql:host='.BD_SERVIDOR.';dbname='.BD_NOMBRE.';charset=utf8', BD_USUARIO, BD_PASSWORD);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
	echo "ERROR: " . $e->getMessage();
	
} 


$sql = 'SELECT * FROM guia';

echo '<table>';
foreach ($dbh->query($sql) as $row)
{
	echo '<tr>';
	print '<td>'. $row['DEPENDENCIA'] . "</td>";
	print '<td>'. $row['CARGO'] . "</td>";
	print '<td>'. $row['EMAIL'] . "</td>";
	print '<td>'. $row['DOMICILIO'] . "</td>";
	echo '</tr>';
}
echo '</table>';
*/

$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "db_juridico_web";
$dbh = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


if ($_GET["action"] == "pjnguidecourstlist"){
	
	$sql = mysqli_query($dbh,"SELECT * FROM guia ");

	if(mysqli_num_rows($sql) > 0)
	{
		$courts = mysqli_fetch_all($sql,MYSQLI_ASSOC);
		echo json_encode($courts);
	}
	else 
	{ 
		echo json_encode([["success"=>0]]); 
	}

}

if ($_GET["action"] == "calendarevent"){
	
	$calendarEvents = array(
		['start' => '2022-02-28T00:00:00', 'end' => '2022-03-01T24:00:00', 'title' => 'Carnaval', 'color' => '#f1e60d'],
		['start' => '2022-03-02T07:30:00', 'end' => '2022-03-11T07:30:00', 'title' => 'Traslado (Impugnaciones, memorial)'],
		['start' => '2022-03-02T13:30:00', 'end' => '2022-03-02T13:30:01', 'title' => 'Testimonial'],
		['start' => '2022-03-02T13:30:00', 'end' => '2022-03-04T13:30:00', 'title' => 'Traslado de Demanda'],
		['start' => '2022-03-04T10:30:00', 'end' => '2022-03-04T10:30:00', 'title' => 'Testimonial'],
		['start' => '2022-03-07T18:30:00', 'end' => '2022-03-07T18:30:00', 'title' => 'Testimonial. GSJ - '],
		['start' => '2022-03-03T12:30:00', 'end' => '2022-03-04T12:30:00', 'title' => 'Plazo 24 hs. Ministerio Ley.'],
		['start' => '2022-03-08T15:30:00', 'end' => '2022-03-08T15:30:00', 'title' => 'Testimonial. GSJ - Cardozo.'],
		['start' => '2022-03-02T14:30:00', 'end' => '2022-03-10T14:30:00', 'title' => 'Testimonial. Fragola.']
	);
	echo json_encode($calendarEvents);
	

}






?>


