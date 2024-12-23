
function calculate_task2(stringOfNumbers){
	
	//Проверка является ли строка пустой
	if (stringOfNumbers === ""){
		return "";
	}

	var arrayOfNumbers = stringOfNumbers.split(" ");
	var iterationCounter = 0;
	var resultString = "";
	
	while (iterationCounter < arrayOfNumbers.length){
		if (arrayOfNumbers[iterationCounter] === ""){
			return "Введите числа через один пробел, без пробелов в начале и конце!";
		}
		iterationCounter++;
	}

	iterationCounter = 0;

	if (arrayOfNumbers.length !== 2){
		return "Проверьте количество введенных чисел!";
	}

	while (iterationCounter < arrayOfNumbers.length){
		if (isNaN(arrayOfNumbers[iterationCounter])){
			return "Проверьте введенные значения!";
		} else{
			arrayOfNumbers[iterationCounter] = Number(arrayOfNumbers[iterationCounter]);
			if (!(Number.isInteger(arrayOfNumbers[iterationCounter]))){
				return "Вводимые значения должны быть целыми!";
			}
		}
		iterationCounter++;
	}

	iterationCounter = 0;

	var numberA = arrayOfNumbers[0];
	var numberB = arrayOfNumbers[1];

	if (numberA >= numberB){
		return "Первое значение должно быть строго меньше второго!";
	}

	while (numberA <= numberB){
		if (numberA === numberB){
			resultString += numberA + " ";
		}else{
			resultString += numberA + ", ";
		}
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

