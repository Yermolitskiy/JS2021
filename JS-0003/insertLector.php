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

// Taking all 5 values fron the form


$lec_name = $_REQUEST['lec_name'];
$lec_surname = $_REQUEST['lec_surname'];
$lec_phone = $_REQUEST['lec_phone'];
$lec_mail = $_REQUEST['lec_mail'];
$lec_gender = $_REQUEST['lec_gender'];


$sql ="INSERT INTO lectors VALUES (DEFAULT, '$lec_name', '$lec_surname', '$lec_phone', '$lec_mail', '$lec_gender' )";

if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error" . $sql . "<br>" . $conn->error;
}

// close connection
mysqli_close($conn);
header('Location:' . $_SERVER['HTTP_REFERER']);
?>
