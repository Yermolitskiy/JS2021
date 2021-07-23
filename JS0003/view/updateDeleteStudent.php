<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/main.css">
    <title>Update and Delete Student</title>
</head>
<body>
    <div class="container">
    
        <div class="form form_1">
            <h1>Update student data</h1>
            <form action="../php/updateStudent.php" method="POST" >
                <p>
                    <label="Personal_code">Student Personal Code:</label>
                    <input type="text" name="personalCode" id="personalCode">
                </p>
                <h5>Edit fields</h5>
                
                <ul>
                    <li>
                        <label="Name">Name:</label>
                        <input type="text" name="name" id="firstName">
                    </li>
                    <li>
                        <label="Surname">Surname:</label>
                        <input type="text" name="surname" id="secondName">
                    </li>
                    <li>
                        <label="Surname">Age:</label>
                        <input type="number" name="age" id="Age">
                    </li>
                    <li>
                        <label="Surname">Gender:</label>
                        <input type="text" name="gender" id="Gender">
                    </li>
                </ul>
                <div class="btn-form">
                    <button type="submit"  id="submitForm" value="submit">Submit</button>
                </div>
                <?php 
                    if(isset($_SESSION['updateMessage'])){
                        echo '<div class="info_box"><p class="text-primary">' . $_SESSION['updateMessage'] . '</p></div>';
                    }
                    unset($_SESSION['updateMessage']);
                ?>
            </form>
            
    
        </div>
        <div class="form form_2">
            <h1>Delete Student</h1>
            <form action="../php/deleteStudent.php" method="POST" >
                <p>
                    <label="Personal_code">Student Personal Code:</label>
                    <input type="text" name="personalCode" id="personalCodeDelete">
                </p>

                <?php 
                    if(isset($_SESSION['deleteMessage'])){
                        echo '<div class="info_box"><p class="text-primary">' . $_SESSION['deleteMessage'] . '</p></div>';
                    }
                    unset($_SESSION['deleteMessage']);
                ?>
              
               
                <button type="submit" id="deleteStudent" value="submit">Submit</button>
            </form>
    
        </div>
    </div>

    <?php 
        if(isset($_SESSION['Error'])){
             echo '<div class="info_box"><p class="text-danger">' . $_SESSION['Error'] . '</p></div>';
            }
        unset($_SESSION['Error']);
    ?>
    
   <div id="err-msg"></div>

    <a class="btn" style="margin-top:15px;" href="../index.html">back</a>



    
</body>
<script src='../scripts/index.js' type="text/javascript"></script>
</html>