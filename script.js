//this function for submit event
function submitFunc(){
    window.location.href="http://127.0.0.1:5500/SubmitPage.html";
}
// this function for back button
function backFunc(){
    window.location.href="http://127.0.0.1:5500/PersonalDetailsPage.html";
}
// this function used for validating full name of user
function validateFunc(fullname,minlen,maxlen)
{
	// phnone format
	var number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var contact = document.getElementById('phone').value;
	if(!number.test(contact))
	{
		alert("incorrect format")
		return false;
	}
	else
	{
		alert("correct");
		return true;
		
	}
	var regFname = /^[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+$/;
	var name = document.getElementById('fullname').value;
	if(!regFname.test(name))
	{
     alert('Please enter firstName + MiddleName +Lastname');
	 document.getElementById('fullname').focus();
	 return false;
	}
	else
	{
		alert(Fullname);
		return true;
	}
	var email = document.getElementById('email').value;
	
}
function validationFrom()
{
	var fname = document.forms["myForm"]["fullname"].value;
	if (fname == " ")
	{
		alert("enter full name")
		return false;
	}
}
//function for otp generation
function otpFunc()
{
	// delcare str for variable
	var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcddefghijklmnopqrstuvwxyz';
	let otp = '';
	var genotp = document.getElementById('gen_otp').value;
	//find length of str
	var len = string.length;
	var secform = document.getElementById('lable').value;
	document.getElementById("fullname").innerHTML = secform;
	
	
	// for-loop fetching random variables from string variable 
	for(let i =0; i<4; i++)
	{
		//joining random variable as otp
		otp +=string[Math.floor(Math.random()*len)];
		if(otp == genotp)
	{
		alert("validation");
		return true;
	}
	else
	{
		alert(unsucessfull);
		return false;
	}
	}
	//returning the generated otp
	return ("otp"+otp);
	
	
}







