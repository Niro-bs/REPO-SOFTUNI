function deleteTown() {
	let townName = document.getElementById("townName").value;
	document.getElementById("townName").value = "";
	let removed = false;
	let options = document.querySelectorAll("#towns option");
	for (let i = 0; i < options.length; i++) {
	  if (options[i].textContent == townName) {
		removed = true;
		options[i].remove();
	  }
	}
	if (removed) showMessage(townName + " deleted.");
	else showMessage(townName + " not found.");
}
  
function showMessage(msg) {
	let resultElement = document.getElementById("result");
	resultElement.textContent = msg;
	resultElement.style.display = "block";
	setTimeout(function () {
	  resultElement.style.display = "none";
	}, 3000);
}