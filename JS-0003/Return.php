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
// $name = $_REQUEST['name'];
// $surname = $_REQUEST['surname'];
// $gender = $_REQUEST['gender'];
// $age = $_REQUEST['age'];


//$sql = "SELECT * FROM student where id_Faculty=3";
//$sql = "SELECT s.Age FROM `student` s WHERE `Name`='$name' and `Surname`='$surname';";
$sql ="SELECT distinct s.Name, s.Surname from `student` s";
$result = $conn->query($sql);
if ($result!==false && $result->num_rows > 0) {
    //output data of each row
    while ($row = $result->fetch_assoc()) {
      //echo "id: " . $row['id_Student']. " - " . $row['Name']. " " . $row['Surname']. " ". $row["Gender"]. " ".$row['Age']. "<br>";
       // echo "Age:".$row['Age']."<br>";
       echo "id: " . " - " . $row['Name']. " " . $row['Surname']. " ".   "<br>";
  }
 }
else
{
    echo "0 results";
}
$conn->close();
//header('Location:' . $_SERVER['HTTP_REFERER']);
?>




