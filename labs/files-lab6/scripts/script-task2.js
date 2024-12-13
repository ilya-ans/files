
//Преобразование массива в строку и добавление <br> для красивого вывода массива в двумерном виде
function arrayToString(arrayOfNumbersLocal, lengthMLocal, lengthNLocal){
	var resultString = "";
	var iterationCounterMLocal = 0;
	var iterationCounterNLocal = 0;
	while (iterationCounterMLocal < lengthMLocal){
		while (iterationCounterNLocal < lengthNLocal){
			resultString += arrayOfNumbersLocal[iterationCounterMLocal][iterationCounterNLocal] + " ";
			iterationCounterNLocal++;
		}
		resultString += "<br>";
		iterationCounterNLocal = 0;
		iterationCounterMLocal++;
	}
	
	return resultString;
}


//Преобразование строки в двумерный массив
function stringToArray(stringOfNumbersLocal){
	var arrayOfNumbersLocal = [];
	var stringLength = stringOfNumbersLocal.length;
	var iterationCounterStr = 0;
	var indexM = 0;
	var oneOfNumbersString = "";
	var isNewString = true;
	
	while (iterationCounterStr < stringLength){
		// Проверяет, началось ли чтение элементов новой строки матрицы, если да, то добавляет новый пустой массив
		if (isNewString){
			arrayOfNumbersLocal.push([]);
			isNewString = false;
		}
		// Проверяет является ли элемент строки пробелом, если да, то проверяет является ли oneOfNumbersString пустой строкой, это необходимо для гарантии, что предыдущий элемент
		// не был пробелом, если не является, то добавляет новый элемент в массив. Также если встречается более одного пробела подряд, этот участок кода переводит цикл к следующей
		// итерации
		if (stringOfNumbersLocal[iterationCounterStr] === " "){
			if (oneOfNumbersString !== ""){
				arrayOfNumbersLocal[indexM].push(Number(oneOfNumbersString));
				oneOfNumbersString = "";
			}
			iterationCounterStr++;
			continue;
		}
		// Проверяет является ли элемент строки концом строки матрицы, если да, то проверяет является ли oneOfNumbersString пустой строкой, так перед символом ";" могли не поставить
		// пробел соответственно элемент мог быть не записан в массив
		if (stringOfNumbersLocal[iterationCounterStr] === ";"){
			if (oneOfNumbersString !== ""){
				arrayOfNumbersLocal[indexM].push(Number(oneOfNumbersString));
				oneOfNumbersString = "";
			}
			indexM++;
			iterationCounterStr++;
			isNewString = true;
			continue;
		}
		// Если символ не пробел и не ; , то его добавляем к строке для формирования числа
		oneOfNumbersString += stringOfNumbersLocal[iterationCounterStr];
		// Если в конце не был поставлен пробел и предпоследний элемент был частью числа, то это число не было записано в массив, эта часть кода предусматривает это
		if ((iterationCounterStr+1) === stringLength){
			arrayOfNumbersLocal[indexM].push(Number(oneOfNumbersString));
			oneOfNumbersString = "";
		}
		iterationCounterStr++;
	}
	return arrayOfNumbersLocal;
}


// Основная функция
function calculate_task2(stringOfNumbers){
	
	var arrayOfNumbers = stringToArray(stringOfNumbers);
	
	var indexOfMinColumn;
	var indexOfMaxColumn;
	var maxNumber;
	var minNumber;
	
	var lengthM = arrayOfNumbers.length;
	var lengthN = arrayOfNumbers[0].length;
	
	var startedArrayString = arrayToString(arrayOfNumbers, lengthM, lengthN);
	
	var iterationCounterM = 0;
	var iterationCounterN = 0;
	
	// Цикл для нахождения индексов столбцов, в которых находятся минимальный и максимальный элементы массива 
	while (iterationCounterM < lengthM){
		while (iterationCounterN < lengthN){
			if ((maxNumber === undefined) || (arrayOfNumbers[iterationCounterM][iterationCounterN] > maxNumber)){
				maxNumber = arrayOfNumbers[iterationCounterM][iterationCounterN];
				indexOfMaxColumn = iterationCounterN;
			}
			if ((minNumber === undefined) || (arrayOfNumbers[iterationCounterM][iterationCounterN] < minNumber)){
				minNumber = arrayOfNumbers[iterationCounterM][iterationCounterN];
				indexOfMinColumn = iterationCounterN;
			}
			iterationCounterN++;
		}
		iterationCounterN = 0;
		iterationCounterM++;
	}

	iterationCounterM = 0;
	
	// Цикл для замены столбцов, содержащих максимальный и минимальный элементы
	while (iterationCounterM < lengthM){
		var replacedNumber;
		replacedNumber = arrayOfNumbers[iterationCounterM][indexOfMaxColumn];
		arrayOfNumbers[iterationCounterM][indexOfMaxColumn] = arrayOfNumbers[iterationCounterM][indexOfMinColumn];
		arrayOfNumbers[iterationCounterM][indexOfMinColumn] = replacedNumber;
		iterationCounterM++;
	}
	
	var finishedArrayString = arrayToString(arrayOfNumbers, lengthM, lengthN);
	
	return startedArrayString + "<br>" + finishedArrayString;
}

var task2_value = document.querySelector(".task2_value");
var task2_submit = document.querySelector(".task2_submit");
var task2_result = document.querySelector(".task2_result");


//Добавил вместо .textContent метод .innerHTML, чтобы передаваемая строка считалась HTML кодом
task2_submit.onclick = function () {
	task2_result.innerHTML = calculate_task2(task2_value.value);
}

