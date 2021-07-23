<?php 

$server_name = 'localhost';
$username = 'root';
$password = '';
$db_name = 'random';

//Connect to database
$connection = new mysqli($server_name , $username , $password,$db_name);


//check connection 
if($connection->connect_error){
    die('Connection failed : ' . $connection->connect_error);
}

//Taking 5 values from the form (client)
$json = $_POST['json'];
$request_obj = json_decode($json);

$personalCode = $request_obj->{'personalCode'};
$points = $request_obj->{'points'};
$grade = $request_obj->{'grade'};

$sql_query_select = "SELECT * FROM testResults WHERE personalcode = '$personalCode'";

$result = $connection->query($sql_query_select);

if($result->num_rows>0){
    $data = ['message' => 'One student can pass test only once!'];
    header('Content-Type: application/json');
    echo json_encode($data);
    return false;
}

$sql_query = "INSERT INTO testResults VALUES (DEFAULT , '$personalCode' , '$points' , '$grade' )";

if($connection->query($sql_query) === TRUE){
    $data = ['message' => 'Results were submitted!'];
    header('Content-Type: application/json');
    echo json_encode($data);
}else{
    $data = ['message' => 'no student with such personal code!'];
    header('Content-Type: application/json');
    echo json_encode($data);
}


//close connection 
mysqli_close($connection);
// header('Location:' . $_SERVER['HTTP_REFERER']);
?>