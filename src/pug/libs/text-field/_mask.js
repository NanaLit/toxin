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
      if (inputNumbersValue.length >= 2) {
        formattedValue += inputNumbersValue[1]+".";
        if (+formattedValue.substring(0,2) <= 0 || +formattedValue.substring(0,2) > 31) {
            formattedValue = "Введите корректное значение дня";
          } else {
            if(inputNumbersValue.length >= 3) {
              formattedValue += inputNumbersValue[2];
              if(inputNumbersValue.length >= 4) {
                formattedValue += inputNumbersValue[3]+".";
                console.log(formattedValue);
                if (+formattedValue.substring(3,5) <= 0 || +formattedValue.substring(3,5) > 12) {
                    formattedValue = "Введите корректное значение месяца";
                  } else {
                    if(inputNumbersValue.length >= 5) {
                      formattedValue += inputNumbersValue[4];
                      console.log(formattedValue);
                      if(inputNumbersValue.length >= 6) {
                        formattedValue += inputNumbersValue[5];
                        console.log(formattedValue);
                        if(inputNumbersValue.length >= 7) {
                          formattedValue += inputNumbersValue[6];
                          console.log(formattedValue);
                          if(inputNumbersValue.length >= 8) {
                            formattedValue += inputNumbersValue[7];
                            console.log(formattedValue);
                            if (+formattedValue.substring(6,10) <= 1945 || +formattedValue.substring(6,10) > 2022) {
                                formattedValue = "Введите корректное значение года рождения";
                            }
                          }
                        }
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
    input.value = formattedValue;
  };

  maskFields.forEach((element)=> {
    element.addEventListener('input', dateInput);
  });
}

module.exports = maskedInput;