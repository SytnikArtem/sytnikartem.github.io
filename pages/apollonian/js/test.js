
const form = document.getElementById('symptoms');
const block1 = document.getElementById('yellow');
const block2 = document.getElementById('orange');
const block3 = document.getElementById('red');
const btn = document.getElementById('test-btn');
var sum = 0;

btn.addEventListener('click', function(e) {
	e.preventDefault();

	for (var i = 0; i < 8; i++) {
		if (document.querySelectorAll('#symptoms input')[i].checked) {
			sum = sum + 1;
		}
	}



	block1.classList.remove('visible');
	block2.classList.remove('visible');
	block3.classList.remove('visible');

	if (sum >= 1 && sum <= 2) {
		block1.classList.add('visible');
	} else if (sum > 2 && sum <= 6) {
		block2.classList.add('visible');
	} else if (sum >= 7 && sum <= 8) {
		block3.classList.add('visible');
	} else {
		alert("Проверьте себя на тревожность")
	}

	sum = 0;
});