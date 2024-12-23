
function calculate_task2(task2_number){

	//Проверяет является ли строка пустой
	if (task2_number === ""){
		return "";
	}

	if (isNaN(task2_number)){
		return "Проверьте введенное значение!";
	} else{
		task2_number = Number(task2_number);
		if (!(Number.isInteger(task2_number))){
			return "Вводимое значение должно быть целочисленным!";
		}
	}

	if (task2_number > 0){
		if (task2_number%2 !== 0){
			return (task2_number + 1);
		}
	}
	return (task2_number - 2);
}

var task2_value = document.querySelector(".task2_value");
var task2_submit = document.querySelector(".task2_submit");
var task2_result = document.querySelector(".task2_result");

task2_submit.onclick = function () {
	task2_result.textContent = calculate_task2(task2_value.value);
}

