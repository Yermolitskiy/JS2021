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
// echo "Connected successfully... ";

// Taking all 4 values from the form data(input)
$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$gender = $_REQUEST['gender'];
$age = $_REQUEST['age'];


$sql = "SELECT * FROM student WHERE name='$name'"; //" and Password='$password'";
// $sql = "INSERT INTO student VALUES (DEFAULT, '$name','$surname','$gender',$age, 2)";
$result = $conn->query($sql);

if ($result!==false && $result->num_rows > 0) {
//     echo "Login Success";
// } else {
//     echo "Error";
// }
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["Id_Student"]. " - " . $row["Name"]. " " . $row["Surname"]. " " . $row["Gender"]." " . $row["Age"]. "<br>";

    //create cookie
    // $cookie_name = "StudentName";
    // $cookie_value = $row["Name"];
    // setcookie($cookie_name, $cookie_value);
    // if(!isset($_COOKIES[$cookie_name])) {
    //     print("Cookie created! ");
    // }
  }
} else {
  echo "0 results";
}
$conn->close();

// header('Location: ' . $_SERVER['HTTP_REFERER']);
// if ($conn->query($sql) === TRUE) {
//     echo "record inserted successfully... ";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }
        //Close connection
        // mysqli_close($conn);
        // header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
