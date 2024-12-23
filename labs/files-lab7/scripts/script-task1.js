function calculate_task1(stringOfNumbers){
	
	//Проверяет является ли строка пустой
	if (stringOfNumbers === ""){
		return "";
	}

	var arrayOfNumbers = stringOfNumbers.split(" ");
	
	var iterationCounter = 0;

	while (iterationCounter < arrayOfNumbers.length){
		if (arrayOfNumbers[iterationCounter] === ""){
			return "Введите числа через один пробел, без пробелов в начале и конце!";
		}else if(isNaN(arrayOfNumbers[iterationCounter])){
			return "Проверьте введенные значения!";
		}else{
			arrayOfNumbers[iterationCounter] = Number(arrayOfNumbers[iterationCounter]);
		}
		iterationCounter++;
	}
	
	if (arrayOfNumbers.length !== 4){
		return "Проверьте количество введенных чисел!";
	}

	var arithmeticMean1;
	var geometricMean1;
	var arithmeticMean2;
	var geometricMean2;

	var resultSum1;
	var resultSum2;
	
	arithmeticMean1 = (arrayOfNumbers[0] + arrayOfNumbers[1])/2;
	geometricMean1 = (arrayOfNumbers[0] * arrayOfNumbers[1])**0.5;
	resultSum1 = arithmeticMean1 + geometricMean1;
	
	arithmeticMean2 = (arrayOfNumbers[2] + arrayOfNumbers[3])/2;
	geometricMean2 = (arrayOfNumbers[2] * arrayOfNumbers[3])**0.5;
	resultSum2 = arithmeticMean2 + geometricMean2;

	return "Первая пара чисел:" + resultSum1 + "<br>" + "Вторая пара чисел:" + resultSum2;
	
}

var task1_value = document.querySelector(".task1_value");
var task1_submit = document.querySelector(".task1_submit");
var task1_result = document.querySelector(".task1_result");


task1_submit.onclick = function () {
	task1_result.innerHTML = calculate_task1(task1_value.value);
}

