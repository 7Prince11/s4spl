<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
     $login = $_POST['login'];
     $haslo = $_POST['haslo'];
     $sql = "INSERT INTO hasla (login,haslo) VALUES ('$login','$haslo')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>