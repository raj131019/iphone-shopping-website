function convertData(){
    //user input and output

    let userInput = document.getElementById("userInput").value;
    let output = document.getElementById("displayOutput")

    let inputType = document.getElementById("inputType").value
    let outputType = document.getElementById("outputType").value

    //script for empty outputs

    if(userInput == "" || inputType == "" || outputType ==""){
        output.classList.add("blink-error")
        output.innerHTML = "Please fill the required all inputs"
    } else{
        output.classList.remove("blink-error")
    }

    //calculation

    let kilobyte,megabyte,gigabyte,terabyte

    //kilobyte
    if(inputType == "kilobyte" & outputType == "kilobyte"){
        kilobyte = userInput
        output.innerHTML = `${userInput}kb = ${(kilobyte)}kb`

    } else if(inputType == "kilobyte" & outputType == "megabyte"){
        megabyte = userInput/1024
        output.innerHTML = `${userInput}kb = ${(megabyte)}mb`
    } else if (inputType == "kilobyte" & outputType == "gigabyte"){
        gigabyte = (userInput/1024)/1024
        output.innerHTML = `${userInput}kb = ${(gigabyte)}gb`
    } else if(inputType == "kilobyte" & outputType == "terabyte"){
        terabyte = (userInput/1024)/1024 /1024
        output.innerHTML = `${userInput}kb = ${(terabyte)}tb`
    }

    //megabyte
  
    if(inputType == "megabyte" & outputType == "kilobyte"){
        kilobyte = userInput*1024
        output.innerHTML = `${userInput}mb = ${(kilobyte)}kb`

    } else if(inputType == "megabyte" & outputType == "megabyte"){
        megabyte = userInput
        output.innerHTML = `${userInput}mb = ${(megabyte)}mb`
    } else if (inputType == "megabyte" & outputType == "gigabyte"){
        gigabyte = userInput/1000
        output.innerHTML = `${userInput}mb = ${(gigabyte)}gb`
    } else if(inputType == "megabyte" & outputType == "terabyte"){
        terabyte = userInput/1000000
        output.innerHTML = `${userInput}mb = ${(terabyte)}tb`
    }

    //gigabyte
    if(inputType == "gigabyte" & outputType == "kilobyte"){
        kilobyte = userInput*1000000
        output.innerHTML = `${userInput}gb = ${(kilobyte)}kb`

    } else if(inputType == "gigabyte" & outputType == "megabyte"){
        megabyte = userInput*1024
        output.innerHTML = `${userInput}gb = ${(megabyte)}mb`
    } else if (inputType == "gigabyte" & outputType == "gigabyte"){
        gigabyte = userInput
        output.innerHTML = `${userInput}gb = ${(gigabyte)}gb`
    } else if(inputType == "gigabyte" & outputType == "terabyte"){
        terabyte = userInput/1000
        output.innerHTML = `${userInput}gb = ${(terabyte)}tb`
    }

    //terabyte
    if(inputType == "terabyte" & outputType == "kilobyte"){
        kilobyte = userInput*100000000
        output.innerHTML = `${userInput}tb = ${(kilobyte)}kb`

    } else if(inputType == "terabyte" & outputType == "megabyte"){
        megabyte = userInput*1000000
        output.innerHTML = `${userInput}tb = ${(megabyte)}mb`
    } else if (inputType == "terabyte" & outputType == "gigabyte"){
        gigabyte = userInput*1024
        output.innerHTML = `${userInput}tb = ${(gigabyte)}gb`
    } else if(inputType == "terabyte" & outputType == "terabyte"){
        terabyte = userInput
        output.innerHTML = `${userInput}tb = ${(terabyte)}tb`
    }

} 

