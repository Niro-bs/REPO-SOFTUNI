$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
	$('#btnAdd').click(addTown)
	console.log('hello');
});


function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function addTown() {
	let townNameField = document.getElementById('addTownInput');

	let towns = document.getElementById('towns');
	let newTown = document.createElement('option');

	newTown.textContent = townNameField.value;

	townNameField.value = '';
	towns.appendChild(newTown);
}
