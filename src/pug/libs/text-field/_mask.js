function maskedInput() {
  let maskFields = document.querySelectorAll('.text-field__input_masked');
  let getInputNumbersValue = function(input) {
    return input.value.replace(/\D/g, "");
  };
  
  let dateInput = function(e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        formattedValue = "";
    if(!inputNumbersValue) {
      return input.value = "";
    }
    if (+inputNumbersValue[0] <= 3) {
      formattedValue = `${inputNumbersValue[0]}`;
      if ((inputNumbersValue.length >= 2 && +inputNumbersValue[0] <= 2) || (inputNumbersValue.length >= 2 && +inputNumbersValue[0] === 3 && (inputNumbersValue[1] === "0" || +inputNumbersValue[1] === 1))) {
        formattedValue += inputNumbersValue[1]+".";
        console.log(formattedValue);
        if(inputNumbersValue.length >= 3 && +formattedValue <= 31) {
          formattedValue += inputNumbersValue[2];
          console.log(formattedValue);
          if((inputNumbersValue.length >= 4 && inputNumbersValue[2] === "0") || (inputNumbersValue.length >= 4 && inputNumbersValue[2] === "1" && (inputNumbersValue[3] === "0" || inputNumbersValue[3] === "1" || inputNumbersValue[3] === "2"))) {
            formattedValue += inputNumbersValue[3]+".";
            console.log(formattedValue);
            if(inputNumbersValue.length >= 5 && +inputNumbersValue[4] === 1) {
              formattedValue += inputNumbersValue[4];
              console.log(formattedValue);
              if(inputNumbersValue.length >= 6 && +inputNumbersValue[5] === 9) {
                formattedValue += inputNumbersValue[5];
                console.log(formattedValue);
                if(inputNumbersValue.length >= 7) {
                  formattedValue += inputNumbersValue[6];
                  console.log(formattedValue);
                  if(inputNumbersValue.length >= 8) {
                    formattedValue += inputNumbersValue[7];
                    console.log(formattedValue);
                  }
                }
              }
            }
          }
        }
        
      }
    } else {
      formattedValue = "";
    }
    if (+formattedValue.substring(0,2) <= 0 || +formattedValue.substring(0,2) > 31) {
      formattedValue = "Введите корректное значение";
    }
    input.value = formattedValue;
  };

  maskFields.forEach((element)=> {
    element.addEventListener('input', dateInput);
  });
}

module.exports = maskedInput;