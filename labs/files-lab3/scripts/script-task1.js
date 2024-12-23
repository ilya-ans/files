
function calculate_task1(A){

	//Проверяет является ли строка пустой
	if (A === ""){
		return "";
	}

	if (isNaN(A)){
		return "Проверьте введенное значение!";
	} else{
		A = Number(A);
		if (A <= 0){
			return "Вводимое значение не может быть меньше 1!";
		}else if (!(Number.isInteger(A))){
			return "Вводимое значение должно быть целочисленным!";
		}
	}

	if ((A > 9) && (A < 100)){
		if (A%2 !== 0){
			return "TRUE";
		}
	}
	return "FALSE";
}

var task1_value = document.querySelector(".task1_value");
var task1_submit = document.querySelector(".task1_submit");
var task1_result = document.querySelector(".task1_result");

task1_submit.onclick = function () {
	task1_result.textContent = calculate_task1(task1_value.value);
}

