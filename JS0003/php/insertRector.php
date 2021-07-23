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
$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$gender = $_REQUEST['gender'];
$age = $_REQUEST['age'];
$phone = $_REQUEST['phone'];
$mail = $_REQUEST['mail'];

$sql_query = "INSERT INTO rector VALUES (DEFAULT , '$name' , '$surname' , '$age' , '$gender' , '$phone' , '$mail')";

if($connection->query($sql_query) === TRUE){
    echo "record inserted successfully";
}else{
    echo "Error: " . $sql_query . "<br>" . $connection->error;
}


//close connection 
mysqli_close($connection);
header('Location:' . $_SERVER['HTTP_REFERER']);
?>