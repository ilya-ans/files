function calculate_task1(stringOfNumbers){
	
	//Проверяет является ли строка пустой
	if (stringOfNumbers === ""){
		return "";
	}

	var arrayOfNumbers = stringOfNumbers.split(" ");
	
	var iterationCounterM = 1;
	var iterationCounterN = 1;
	
	var resultArray = [];
	
	var iterationCounter = 0;

	//Проверка на корректность введенных значений, а именно на наличие лишних пробелов. Необходимо, т.к. метод split при двух пробелах введенных подряд 
	//будет добавлять в массив пустую строку, как элемент
	while (iterationCounter < arrayOfNumbers.length){
		if (arrayOfNumbers[iterationCounter] === ""){
			return "Введите числа через один пробел, без пробелов в начале и конце!"; 
		}
		iterationCounter++;
	}

	iterationCounter = 0;

	// Проверка количества введенных элементов
	if (arrayOfNumbers.length !== 2){
		return "Проверьте количество введенных чисел!";
	}

	//Проверяем строку, является ли она числом при помощи isNaN, т.к. она вернет true, если после преобразования к числу строка станет NaN.
	//Проверяем является ли число не целым
	while (iterationCounter < arrayOfNumbers.length){
		if (isNaN(arrayOfNumbers[iterationCounter])){
			return "Проверьте введенные значения!";
		} else{
			arrayOfNumbers[iterationCounter] = Number(arrayOfNumbers[iterationCounter]);
			if (!(Number.isInteger(arrayOfNumbers[iterationCounter]))){
				return "Вводимые значения должны быть целыми!";
			}else if (arrayOfNumbers[iterationCounter] <=0 ){
				return "Вводимые значения должны быть больше 0!";
			}
		}
		iterationCounter++;
	}

	iterationCounter = 0;

	var M = arrayOfNumbers[0];
	var N = arrayOfNumbers[1];

	//Заполнение массива MxN при помощи .push
	while (iterationCounterM <= M){
		resultArray.push([]);
		while (iterationCounterN <= N){
			resultArray[iterationCounterM-1].push(iterationCounterN*5);
			iterationCounterN++;
		}
		
		iterationCounterN = 1;
		iterationCounterM++;
	}
	
	//Преобразование массива в строку и добавление <br> для красивого вывода массива в двумерном виде
	iterationCounterM = 0;
	iterationCounterN = 0;
	var resultString = "";
	while (iterationCounterM < M){
		while (iterationCounterN < N){
			resultString += resultArray[iterationCounterM][iterationCounterN] + " ";
			iterationCounterN++;
		}
		resultString += "<br>";
		iterationCounterN = 0;
		iterationCounterM++;
	}
	
	return resultString;
	
}

var task1_value = document.querySelector(".task1_value");
var task1_submit = document.querySelector(".task1_submit");
var task1_result = document.querySelector(".task1_result");


//Добавил вместо .textContent метод .innerHTML, чтобы передаваемая строка считалась HTML кодом
task1_submit.onclick = function () {
	task1_result.innerHTML = calculate_task1(task1_value.value);
}

