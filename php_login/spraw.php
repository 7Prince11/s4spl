<?php

	if(isset($_POST['submit']))
	{  
	$login = $_POST['login'];
	$haslo = $_POST['haslo'];
	}
	 function autoryzacja($login, $haslo) {
	$servername='localhost';
    $username='id19734637_root';
    $password='8=M^h$HKF(h|zn\7';
    $dbname = "id19734637_projekt";
  $p=mysqli_connect($servername,$username,$password,$dbname);
 
  $wynik=mysqli_query( $p , "SELECT * FROM hasla  WHERE login='$login' AND haslo='$haslo'");
  if (mysqli_num_rows($wynik)==1) {
    mysqli_close($p); return true;
  } else {
    mysqli_close($p); return false;
  }
}
if(isset($_POST['rejestr'])){
		header('Location: https://s4spl2022.000webhostapp.com/rejestracja.html');
}
if (autoryzacja($login,$haslo)) {

  header('Location: https://s4spl.vercel.app/');

} else {
		header('Location: https://s4spl2022.000webhostapp.com/index.html');
	}
?>