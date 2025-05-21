function getFormvalue() {
    //Write your code here
	const form = document.getElementById('form1');
	const fName = form.fname.value.trim();
	const lName = form.lname.value.trim();

	alert(fName +" "+lName);

}
