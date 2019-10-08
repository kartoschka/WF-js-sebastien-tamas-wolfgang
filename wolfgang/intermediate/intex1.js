function fuel_consumption(){
	var km = document.getElementById("kilometers").value;
	var lt = document.getElementById("liters").value;
	
	result = km / lt;

	document.getElementById("output").innerHTML = result;

}

var hansi = document.getElementById("kilometers");
hansi.addEventListener('input', fuel_consumption, false);

var hansi2 = document.getElementById("liters");
hansi2.addEventListener('input', fuel_consumption, false);

