
function calculate_task1(stringOfNumbers){
	
	//Проверка является ли строка пустой
	if (stringOfNumbers === ""){
		return "";
	}

	var arrayOfNumbers = stringOfNumbers.split(" ");
	var iterationCounter = 0;
	var negativeNumbersSum = 0;
	var negativeNumbersCounter = 0;
	var arithmeticMean;
	
	while (iterationCounter < arrayOfNumbers.length){
		if (arrayOfNumbers[iterationCounter] === ""){
			return "Введите числа через один пробел, без пробелов в начале и конце!";
		}
		iterationCounter++;
	}

	iterationCounter = 0;

	if (arrayOfNumbers.length !== 10){
		return "Проверьте количество введенных чисел!";
	}

	while (iterationCounter < 10){

		if (isNaN(arrayOfNumbers[iterationCounter])){
			return "Проверьте введенные значения!";
		} else{
			arrayOfNumbers[iterationCounter] = Number(arrayOfNumbers[iterationCounter]);
			if (Number.isInteger(arrayOfNumbers[iterationCounter])){
				return "Вводимые значения должны быть вещественными!";
			}
		}

		if (arrayOfNumbers[iterationCounter] < 0){
			negativeNumbersSum += arrayOfNumbers[iterationCounter];
			negativeNumbersCounter++;
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

