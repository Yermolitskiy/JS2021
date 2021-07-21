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
$rec_name = $_REQUEST['rec_name'];
$rec_surname = $_REQUEST['rec_surname'];
$rec_gender = $_REQUEST['rec_gender'];
$rec_telephone = $_REQUEST['rec_telephone'];
$rec_mail = $_REQUEST['rec_mail'];
$rec_age = $_REQUEST['rec_age'];


$sql ="INSERT INTO rector VALUES (DEFAULT, '$rec_name', '$rec_surname', '$rec_gender', '$rec_telephone', '$rec_mail', '$rec_age' )";







if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error" . $sql . "<br>" . $conn->error;
}

// close connection
mysqli_close($conn);
header('Location:' . $_SERVER['HTTP_REFERER']);
?>
