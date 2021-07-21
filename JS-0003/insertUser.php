<?php

$servername= "localhost";
$username= "root";
$password = "";
$dbname = "university";

//create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: "
    . $conn->connect_error);
}

// Taking all 4 values fron the form
$UserName = $_REQUEST['UserName'];
$Password = $_REQUEST['Password'];





$sql ="INSERT INTO logins VALUES (DEFAULT, '$UserName', '$Password')";



if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error" . $sql . "<br>" . $conn->error;
}

// close connection
mysqli_close($conn);
//header('Location:' . $_SERVER['HTTP_REFERER']);
?>
