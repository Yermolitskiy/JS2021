<?php

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "university";

// Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully... ";


$name = !empty($_GET['name']) ? (string)$_GET['name'] : null;
$surname = !empty($_GET['surname']) ? (string)$_GET['surname'] : null;
$percent = !empty($_GET['percent']) ? (int)$_GET['percent'] : null;


$sql = "INSERT INTO test(Name,Surname,result) VALUES ('" . $name ."','" . $surname."','" . $percent ."')";
// $result = $conn->query($sql);

// if ($result!==false && $result->num_rows > 0) {
//     echo "Login Success";
// } else {
//     echo "Error";
// }
// $conn->close();
// header('Location: ' . $_SERVER['HTTP_REFERER']);
// if ($conn->query($sql) === TRUE) {
//     echo "record inserted successfully... ";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }
// //         //Close connection
//         
//         $conn->close();
        // header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
