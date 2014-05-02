function controlla(){
    var myFieldVal = document.myForm.myField.value;
    alert("Il valore inserto nel campo è: "+myFieldVal);
    window.open("http://www.xkcd.com/" + myFieldVal)

}

//document.onkeydown = keyDown;

/*function keyDown(e){
	if (!ie) {var keyCode=e.which;}
	if (ie) {var keyCode=event.keyCode;}
	if(keyCode==13){controlla();}
	if(keyCode==37){window.location=URLprecedente;}
	
}*/
 