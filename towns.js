$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

function deleteTown() {
<<<<<<< Updated upstream
let townName = document.getElementById(&quot;townName&quot;).value;
document.getElementById(&quot;townName&quot;).value = &quot;&quot;;
let removed = false;
let options = document.querySelectorAll(&quot;#towns option&quot;);
for (let i = 0; i &lt; options.length; i++) {
if (options[i].textContent == townName) {
removed = true;
options[i].remove();
   }
}
if (removed)
showMessage(townName + &quot; deleted.&quot;);
else
showMessage(townName + &quot; not found.&quot;);
}

function showMessage(msg) {
let resultElement = document.getElementById(&quot;result&quot;);
resultElement.textContent = msg;
resultElement.style.display = &quot;block&quot;;
setTimeout(function () {
resultElement.style.display = &quot;none&quot;;
}, 3000);
}
=======
	let townName = document.getElementById("townName").value;
	document.getElementById("townName").value = "";
	let removed = false;
	let options = document.querySelectorAll("#towns option");
	for (let i = 0; i &lt; options.length; i++) {
		if (options[i].textContent == townName) {
			removed = true;
			options[i].remove();
		}
	}
>>>>>>> Stashed changes
	if (removed)
		showMessage(townName + "deleted");
else
	showMessage(townName + "not found.");
}

function showMessage(msg) {
	let resultElement = document.getElementById("result");
	resultElement.textContent = msg;
	resultElement.style.display = "block";
	setTimeout(function () {
		resultElement.style.display = "none";
	}, 3000);
}
if (removed)
	$('#result').text(townName + " deleted.");
else
	$('#result').text(townName + " not found.");
}