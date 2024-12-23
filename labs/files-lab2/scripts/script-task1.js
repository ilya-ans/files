
function calculate_s(a){
	
	//Проверяет является ли строка пустой
	if (a === ""){
		return "";
	}

	if (isNaN(a)){
		return "Проверьте введенное значение!";
	} else{
		a = Number(a);
		if (a <= 0){
			return "Введенное значение не может быть длиной стороны!";
		}
	}

	var square_s;
	square_s = a * a;
	return "Площадь равна " + square_s + " сантиметров";
}

var read_a_side_value = document.querySelector(".read_a_side_value");
var a_side_submit = document.querySelector(".a_side_submit");
var write_result_s = document.querySelector(".write_result_s");

a_side_submit.onclick = function () {
	write_result_s.textContent = calculate_s(read_a_side_value.value);
}

