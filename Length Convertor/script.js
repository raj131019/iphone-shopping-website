//input text

let input = document.getElementById("input");
let result = document.getElementById("result");


//selected values

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValue,resultTypeValue

//now add event listener

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);


//initial values

inputTypeValue =  inputType.value;
resultTypeValue = resultType.value;

function myResult(){
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


//compare the input & resulttype value and add formula

//Meter
if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
    //meter to kilometerformula
    result.value = Number(input.value) * 0.001;

} else if( inputTypeValue === "meter" && resultTypeValue === "centimeter")
    //meter to centimeter formula
{ result.value = Number(input.value) * 100;


}else if(inputTypeValue === "meter"  && resultTypeValue === "foot"){
    //meter  to foot formula
    result.value = Number(input.value) * 3.28084;

}else if(inputTypeValue === "meter" && resultTypeValue === "inch"){
    //meter to inch formula
    result.value = Number(input.value) * 39.3700787402;

}else if(inputTypeValue ===" meter"  && resultTypeValue === "meter"){
    result.value = input.value;
}

//kilometer

if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
    //kilometer to kilometerformula
    input.value = result.value;

} else if( inputTypeValue === "kilometer" && resultTypeValue === "centimeter")
    //kilometer to centimeter formula
{ result.value = Number(input.value) * 100000;

}else if(inputTypeValue === "kilometer"  && resultTypeValue === "foot"){
    //kilometer  to foot formula
    result.value = Number(input.value) * 3280.839895;

}else if(inputTypeValue === "meter" && resultTypeValue === "inch"){
    //meter to inch formula
    result.value = Number(input.value) * 39370.07874;

}else if(inputTypeValue === "kilometer"  && resultTypeValue === "meter"){
    result.value = Number(input.value) * 1000;
}

//centimeter

if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
    //centimeter to kilometerformula
    result.value = Number(input.value) * 0.00001;

} else if( inputTypeValue === "centimeter" && resultTypeValue === "centimeter")
    //meter to centimeter formula
{ result.value = input.value;

}else if(inputTypeValue === "centimeter"  && resultTypeValue === "foot"){
    //centimeter  to foot formula
    result.value = Number(input.value) * 0.032808399;

}else if(inputTypeValue === "centimeter" && resultTypeValue === "inch"){
    //centimeter to inch formula
    result.value = Number(input.value) * 0.3937007874;

}else if(inputTypeValue === "centimeter"  && resultTypeValue === "meter"){
    result.value = Number(input.value) * 0.001;
}

//foot

if(inputTypeValue === "foot" && resultTypeValue === "kilometer"){
    //foot to kilometerformula
    result.value = Number(input.value) * 0.0003048;

} else if( inputTypeValue === "foot" && resultTypeValue === "centimeter")
    //foot to centimeter formula
{ result.value = Number(input.value) * 30.48;

}else if(inputTypeValue === "foot"  && resultTypeValue === "foot"){
    //foot  to foot formula
    result.value = input.value;

}else if(inputTypeValue === "foot" && resultTypeValue === "inch"){
    //foot to inch formula
    result.value = Number(input.value) * 12;

}else if(inputTypeValue === "foot"  && resultTypeValue === "meter"){
    result.value = Number(input.value) * 0.3048;
}

//inch

if(inputTypeValue === "inch" && resultTypeValue === "kilometer"){
    //inch to kilometerformula
    result.value = Number(input.value) * 0.0000254;
} else if( inputTypeValue === "inch" && resultTypeValue === "centimeter")
    //inch to centimeter formula
{ result.value = Number(input.value) * 2.54;

}else if(inputTypeValue === "inch"  && resultTypeValue === "foot"){
    //inch  to foot formula
    result.value = Number(input.value) * 0.083333333;

}else if(inputTypeValue === "inch" && resultTypeValue === "inch"){
    //inch to inch formula
    result.value = input.value;

}else if(inputTypeValue === "inch"  && resultTypeValue === "meter"){
    result.value = Number(input.value) * 0.0254;
}
}
  
