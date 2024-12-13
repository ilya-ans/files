function calculate_tons(kilos, koef) {
	var tons;
	tons = Math.floor(kilos/koef);
	return "В " + kilos + " килограммах содержится " + tons + " тонн";
}

var read_kilos_value = document.querySelector(".read_kilos_value");
var kilos_submit = document.querySelector(".kilos_submit");
var write_result_tons = document.querySelector(".write_result_tons");
const kilos_in_tons_koef = 1000;

kilos_submit.onclick = function () {
	write_result_tons.textContent = calculate_tons(Number(read_kilos_value.value), kilos_in_tons_koef);
}

