function calculate_age() {
	

	var yearNow = new Date().getYear();


	var birthyear = new Date(1990).getYear();
	
	


	var res = yearNow - birthyear;


	document.getElementById("bob").innerHTML = res;


}