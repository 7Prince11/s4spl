<?php

	if(isset($_POST['submit']))
	{  
	$login = $_POST['login'];
	$haslo = $_POST['haslo'];
	}
	 function autoryzacja($login, $haslo) {
  $p=mysqli_connect("localhost", "root","" , "projekt");
 
  $wynik=mysqli_query( $p , "SELECT * FROM hasla  WHERE login='$login' AND haslo='$haslo'");
  if (mysqli_num_rows($wynik)==1) {
    mysqli_close($p); return true;
  } else {
    mysqli_close($p); return false;
  }
}

if (autoryzacja($login,$haslo)) {

  header('Location: nowa_strona.html');

} else {
		header('Location: index.html');

}
?>