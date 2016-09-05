var link = document.querySelector(".btn-transparent");
var form = document.querySelector(".filter-form");

link.addEventListener("click", function(event) {
	event.preventDefault();
	form.submit();
});