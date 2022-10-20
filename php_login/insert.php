<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
     $login = $_POST['login'];
     $haslo = $_POST['haslo'];
     $sql = "INSERT INTO hasla (login,haslo) VALUES ('$login','$haslo')";
     if (mysqli_query($conn, $sql)) {
        header('Location: index.html');
     } else {
        header('Location: https://s4spl2022.000webhostapp.com/rejestracja.html');
     }
     mysqli_close($conn);
}
if(isset($_POST['rejestr'])){
		header('Location: https://s4spl2022.000webhostapp.com/rejestracja.html');
	}
?>