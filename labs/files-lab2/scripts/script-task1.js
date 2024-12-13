function is_wrong_string(userString){
	var stringOfCorrectValues = "0123456789. ";
	var stringOfCorrectValuesLength = stringOfCorrectValues.length;
	var userStringLength = userString.length;
	var numbersCounter = 0;
	var userStringCounter = 0;
	var stringOfCorrectValuesCounter = 0;
	var isSymbolWrong = true;
	
	while (userStringCounter < userStringLength){
		while (stringOfCorrectValuesCounter < stringOfCorrectValuesLength){
			if (userString[userStringCounter] === stringOfCorrectValues[stringOfCorrectValuesCounter]){
				isSymbolWrong = false;
				break;
			}
			stringOfCorrectValuesCounter++;
		}
		
		if (isSymbolWrong){
			return true;
		}
		
		stringOfCorrectValuesCounter = 0;
		userStringCounter++;
		isSymbolWrong = true;
	}
	return false;
}


function calculate_s(a){
	/*
	
	z = (typeof 1 == 'number');
	console.log(z);

	
	if (is_wrong_string(a)){
		return "Проверьте введенные данные!";
	}
	*/
	var square_s;
	square_s = Number(a) * Number(a);
	return "Площадь равна " + square_s + " сантиметров";
}

var read_a_side_value = document.querySelector(".read_a_side_value");
var a_side_submit = document.querySelector(".a_side_submit");
var write_result_s = document.querySelector(".write_result_s");

a_side_submit.onclick = function () {
	write_result_s.textContent = calculate_s(read_a_side_value.value);
}

