
function calculate_task4(task4_number, a4, b4){

	//Проверяет является ли строка пустой
	if (task4_number === ""){
		return "";
	}

	if (isNaN(task4_number)){
		return "Проверьте введенное значение!";
	} else{
		task4_number = Number(task4_number);
	}

	var y;
	switch(task4_number){
		case -1:
			y = a4 + 0.5 * Math.E**(-task4_number);
			break;
		case 3:
			y = Math.sin(task4_number * b4**2);
			break;
		case 4:
			y = (2 * a4 + task4_number**2)**0.5;
			break;
		default:
			y = "Невозможно посчитать значение от данного аргумента. Попробуйте числа -1, 3, 4";
	}
	return y;
}

var task4_value = document.querySelector(".task4_value");
var task4_submit = document.querySelector(".task4_submit");
var task4_result = document.querySelector(".task4_result");
var a4 = 7.1;
var b4 = 3.2;

task4_submit.onclick = function () {
	task4_result.textContent = calculate_task4(task4_value.value, a4, b4);
}

