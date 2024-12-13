function calculate_task3(task3_number, a3, b3){
	if (task3_number <= 0){
		return (a3 + 0.5 * Math.E**(-task3_number));
	}else if(task3_number < 4){
		return (Math.sin(task3_number * b3**2));
	}else{
		return ((2 * a3 + task3_number**2)**0.5);
	}
}

var task3_value = document.querySelector(".task3_value");
var task3_submit = document.querySelector(".task3_submit");
var task3_result = document.querySelector(".task3_result");
var a3 = 7.1;
var b3 = 3.2;

task3_submit.onclick = function () {
	task3_result.textContent = calculate_task3(Number(task3_value.value), a3, b3);
}