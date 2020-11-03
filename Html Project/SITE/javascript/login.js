var attempt = 3; 


function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "E-educate" && password == "e123456789")
	{
		alert ("Login successfully");
		window.location = "success.html"; 
		return false;
	}
	else{
		attempt --;
		alert("Incorrect Password !! You have left "+attempt+" attempt;");
		
		
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}