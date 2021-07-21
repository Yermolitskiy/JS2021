<?php 

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





$sql_stmnt = "SELECT  faculty.Name , student.Surname , student.Name AS studentName FROM `student` INNER JOIN faculty ON student.Id_faculty=faculty.Id_Faculty WHERE faculty.Name = 'Information Tehnologie' ";
$result = $connection->query($sql_stmnt);
if($result !== false && $result->num_rows>0){
    //output data of each rowA
    while($row = $result->fetch_assoc()){
        
        echo 'Name: ' . $row['studentName'] . ' Surname: ' . $row['Surname'] . ' Faculty: ' . $row['Name'] . '<br>';

    

        //create cookie
        // $cookie_name = "StudentName";
        // $cookie_value = $row['Name'];
        // setcookie($cookie_name , $cookie_value);
        // if(!isset($_COOKIE[$cookie_name])){
        //     print('Cookie created');
        // }
    }
}else{
    echo '0 results';

}

//closing connection
$connection->close()

?>