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
// $gender = $_REQUEST['gender'];
// $age = $_REQUEST['age'];


$sql = "SELECT l.* FROM `logins` l where l.UserName='$UserName' && l.Passwords='$Password'";
//&& l.Passwords='$Password

//$sql = "SELECT s.Age FROM `student` s WHERE `Name`='$name' and `Surname`='$surname';";
$result = $conn->query($sql);
if ($result!==false && $result->num_rows > 0) {
    //output data of each row
    while ($row = $result->fetch_assoc()) {
     // echo "id: " . $row['id_Student']. " - " . $row['Name']. " " . $row['Surname']. " ". $row["Gender"]. " ".$row['Age']. "<br>";
       // echo "Age:".$row['Age']."<br>";
        echo "da estb takoje";
  }
 }
else
{
    echo "0 results";
}
$conn->close();
//header('Location:' . $_SERVER['HTTP_REFERER']);
?>
