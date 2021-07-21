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

$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$gender = $_REQUEST['gender'];
$age = $_REQUEST['age'];

if(!is_null($name) && !is_null($surname) && !is_null($gender) && !is_null($age)){
    $sql_query = "UPDATE `student` 
                SET `Name`='$name',`Surname`='$surname',`Gender`='$gender',`Age`='$age' WHERE Personal_code = '$personalCode'";

    if($connection->query($sql_query) === TRUE){
        $_SESSION['updateMessage'] = 'Student data was succesfuly updated';
    }else{
        // echo "Error: " . $sql_query . "<br>" . $connection->error;
        $_SESSION['Error'] = 'Error: '  . $sql_query . '<br>' . $connection->error;
    }
}else{
    $_SESSION['Error'] = 'Error: All fields must be filled!';
}





//close connection 
mysqli_close($connection);
header('Location:' . $_SERVER['HTTP_REFERER']);
?>