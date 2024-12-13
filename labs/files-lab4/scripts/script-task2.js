function calculate_task2(stringOfNumbers){
	
	var arrayOfNumbers = stringOfNumbers.split(" ");
	var numberA = Number(arrayOfNumbers[0]);
	var numberB = Number(arrayOfNumbers[1]);
	var iterationCounter = 0;
	var resultString = "";
	
	while (numberA <= numberB){
		resultString += numberA + " ";
		numberA++;
		iterationCounter++;
	}
	
	return resultString + " : " + iterationCounter;
}

var task2_value = document.querySelector(".task2_value");
var task2_submit = document.querySelector(".task2_submit");
var task2_result = document.querySelector(".task2_result");

task2_submit.onclick = function () {
	task2_result.textContent = calculate_task2(task2_value.value);
}

