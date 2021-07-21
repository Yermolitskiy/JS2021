<?php 

session_start();

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
$personalCode = $_REQUEST['personalCode'];


$sql_query = "DELETE FROM  student WHERE Personal_code='$personalCode'";

if($connection->query($sql_query) === TRUE){
    $_SESSION['deleteMessage'] = 'Student was succesfuly deleted';
}else{
    // echo "Error: " . $sql_query . "<br>" . $connection->error;
    $_SESSION['Error'] = 'Error: '  . $sql_query . '<br>' . $connection->error();
}


//close connection 
mysqli_close($connection);
header('Location:' . $_SERVER['HTTP_REFERER']);
?>