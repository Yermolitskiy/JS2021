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

// Taking all 4 values from the form data(input)
$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$gender = $_REQUEST['gender'];
$age = $_REQUEST['age'];


// $sql = "SELECT * FROM login WHERE Nickname='$nickname' and Password='$password'";
$sql = "INSERT INTO student VALUES (DEFAULT, '$name','$surname','$gender',$age, 2)";
// $result = $conn->query($sql);

// if ($result!==false && $result->num_rows > 0) {
//     echo "Login Success";
// } else {
//     echo "Error";
// }
// $conn->close();
// header('Location: ' . $_SERVER['HTTP_REFERER']);
if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully... ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
        //Close connection
        mysqli_close($conn);
        // header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
