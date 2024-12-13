function calculate_task1(A){
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
	task1_result.textContent = calculate_task1(Number(task1_value.value));
}