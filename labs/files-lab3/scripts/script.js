function calculate_task1(A){
	if ((A > 9) && (A < 100)){
		if (A%2 !== 0){
			return "Результат: true";
		}
	}
	return "Результат: false";
}

function calculate_task2(task2_number){
	if (task2_number > 0){
		if (task2_number%2 !== 0){
			return "Результат: " + (task2_number + 1);
		}
	}
	return "Результат: " + (task2_number - 2);
}

function calculate_task3(task3_number, a3, b3){
	if (task3_number <= 0){
		return "Результат: " + (a3 + 0.5 * Math.E**(-task3_number));
	}else if(task3_number < 4){
		return "Результат: " + (Math.sin(task3_number * b3**2));
	}else{
		return "Результат: " + ((2 * a3 + task3_number**2)**0.5);
	}
}

function calculate_task4(task4_number, a4, b4){
	if (task4_number === -1){
		return "Результат: " + (a4 + 0.5 * Math.E**(-task4_number));
	}else if (task4_number === 3){
		return "Результат: " + (Math.sin(task4_number * b4**2));
	}else if (task4_number === 4){
		return "Результат: " + ((2 * a4 + task4_number**2)**0.5);
	}else{
		return "Результат: Невозможно посчитать значение от данного аргумента. Попробуйте числа -1, 3, 4"
	}
}

var task1_value = document.querySelector(".task1_value");
var task1_submit = document.querySelector(".task1_submit");
var task1_result = document.querySelector(".task1_result");

var task2_value = document.querySelector(".task2_value");
var task2_submit = document.querySelector(".task2_submit");
var task2_result = document.querySelector(".task2_result");

var task3_value = document.querySelector(".task3_value");
var task3_submit = document.querySelector(".task3_submit");
var task3_result = document.querySelector(".task3_result");
var a3 = 7.1;
var b3 = 3.2;

var task4_value = document.querySelector(".task4_value");
var task4_submit = document.querySelector(".task4_submit");
var task4_result = document.querySelector(".task4_result");
var a4 = 7.1;
var b4 = 3.2;

task1_submit.onclick = function () {
	task1_result.textContent = calculate_task1(Number(task1_value.value));
}

task2_submit.onclick = function () {
	task2_result.textContent = calculate_task2(Number(task2_value.value));
}

task3_submit.onclick = function () {
	task3_result.textContent = calculate_task3(Number(task3_value.value), a3, b3);
}

task4_submit.onclick = function () {
	task4_result.textContent = calculate_task4(Number(task4_value.value), a4, b4);
}



