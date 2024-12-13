function calculate_task1(stringOfNumbers){
	
	var arrayOfNumbers = stringOfNumbers.split(" ");
	var iterationCounter = 0;
	var negativeNumbersSum = 0;
	var negativeNumbersCounter = 0;
	var arithmeticMean;
	
	while (iterationCounter < 10){
		if (Number(arrayOfNumbers[iterationCounter]) < 0){
			negativeNumbersSum += Number(arrayOfNumbers[iterationCounter]);
			negativeNumbersCounter += 1;
		}
		iterationCounter++;
	}
	
	if (negativeNumbersCounter === 0){
		return "В данной строке нет отрицательных чисел!";
	} else {
		arithmeticMean = negativeNumbersSum / negativeNumbersCounter;
	}
	
	return arithmeticMean;
}

var task1_value = document.querySelector(".task1_value");
var task1_submit = document.querySelector(".task1_submit");
var task1_result = document.querySelector(".task1_result");

task1_submit.onclick = function () {
	task1_result.textContent = calculate_task1(task1_value.value);
}

