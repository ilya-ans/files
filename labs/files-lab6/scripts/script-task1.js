function calculate_task1(stringOfNumbers){
	
	var arrayOfNumbers = stringOfNumbers.split(" ");
	var M = Number(arrayOfNumbers[0]);
	var N = Number(arrayOfNumbers[1]);
	
	var iterationCounterM = 1;
	var iterationCounterN = 1;
	
	var resultArray = [];
	
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

