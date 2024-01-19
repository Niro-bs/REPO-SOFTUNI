$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

function deleteTown() {
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
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}
