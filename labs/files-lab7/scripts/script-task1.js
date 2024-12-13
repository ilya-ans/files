function calculate_task1(stringOfNumbers){
	
	var arrayOfNumbers = stringOfNumbers.split(" ");
	
	console.log(arrayOfNumbers);
	
	var arithmeticMean;
	var geometricMean;
	
	var resultSum;
	
	arithmeticMean = (Number(arrayOfNumbers[0]) + Number(arrayOfNumbers[1]))/2;
	console.log(arithmeticMean);
	geometricMean = (Number(arrayOfNumbers[2]) * Number(arrayOfNumbers[3]))**0.5;
	console.log(geometricMean);
	resultSum = arithmeticMean + geometricMean;
	
	return resultSum;
	
}

var task1_value = document.querySelector(".task1_value");
var task1_submit = document.querySelector(".task1_submit");
var task1_result = document.querySelector(".task1_result");


//Добавил вместо .textContent метод .innerHTML, чтобы передаваемая строка считалась HTML кодом
task1_submit.onclick = function () {
	task1_result.innerHTML = calculate_task1(task1_value.value);
}

