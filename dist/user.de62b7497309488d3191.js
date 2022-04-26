/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pug/libs/input-dropdown/_dropdown.js":
/*!**************************************************!*\
  !*** ./src/pug/libs/input-dropdown/_dropdown.js ***!
  \**************************************************/
/***/ (function(module) {

function dropdown() {
  let dropdownInput = document.querySelectorAll('.dropdown__title'),
      dropdownInputGuest = document.querySelector('.dropdown__title_guests'),
      dropdownInputRooms = document.querySelector('.dropdown__title_rooms'),
      dropdownContent = document.querySelectorAll('.dropdown-wrapper'),
      counterGuests = document.querySelectorAll('.counter__number_guests'),
      counterRooms = document.querySelectorAll('.counter__number_rooms'),
      counterWrapper = document.querySelectorAll('.counter'),
      counterText = document.querySelectorAll('.counter__number'),
      count,
      clear = document.querySelector('.clear'),
      apply = document.querySelector('.apply'),
      guestName = 'гость',
      bedRoomName = 'спальня',
      bedName = 'кровать',
      bathName = 'ванная',
      littleGuestName = 'младенец';
  dropdownInput.forEach((item, i, arr) => {
    arr[i].addEventListener('click', function () {
      item.classList.toggle('dropdown__title_active');
      dropdownContent[i].classList.toggle('hide');
    });
  });

  function namedGuests(numbers) {
    if (numbers === 1) {
      guestName = 'гость';
    } else if (numbers > 1 && numbers < 5) {
      guestName = 'гостя';
    } else if (numbers >= 5) {
      guestName = 'гостей';
    }

    return guestName;
  }

  function namedLittleGuests(number) {
    if (number === 1) {
      littleGuestName = 'младенец';
    } else if (number > 1 && number < 5) {
      littleGuestName = 'младенца';
    } else if (number >= 5) {
      littleGuestName = 'младенцев';
    }

    return littleGuestName;
  }

  function clearField() {
    clear.addEventListener('click', function (event) {
      const target = event.target;

      if (target && target.classList.contains('clear')) {
        dropdownInputGuest.innerHTML = `Сколько гостей`;
        clear.classList.add('hidden');
        counterText.forEach(item => {
          item.innerHTML = 0;
        });
      }
    });
  }

  clearField();

  function hiddenClear() {
    if (+counterText[1].innerHTML + +counterText[0].innerHTML !== 0) {
      clear.classList.remove('hidden');
    }

    if (+counterText[1].innerHTML + +counterText[0].innerHTML === 0) {
      clear.classList.add('hidden');
    }
  }

  function getCounter(event) {
    for (let i = 0; i < counterText.length; i++) {
      if (counterWrapper[i] === event.currentTarget) {
        count = Number(counterText[i].innerHTML);
      }
    }

    if (event.target.closest(".minus")) {
      count -= 1;

      if (count < 0) {
        count = 6;
      }
    }

    if (event.target.closest(".plus")) {
      count += 1;

      if (count > 6) {
        count = 0;
      }
    }

    for (let i = 0; i < counterText.length; i++) {
      if (counterWrapper[i] === event.currentTarget) {
        counterText[i].innerHTML = count;
        hiddenClear();
      }
    }

    return count;
  }

  for (let i = 0; i < counterWrapper.length; i++) {
    counterWrapper[i].addEventListener("click", getCounter);
  }

  function getGuests() {
    counterWrapper.forEach((item, i, arr) => {
      arr[i].addEventListener('click', function (event) {
        const target = event.target;
        let bigGuest = +counterGuests[1].innerHTML + +counterGuests[0].innerHTML;
        let littleGuest = +counterGuests[2].innerHTML;

        if (target && target.classList.contains('guests') && littleGuest === 0 && bigGuest > 0) {
          namedGuests(bigGuest);
          dropdownInputGuest.innerHTML = `${bigGuest} ${guestName}`;
        } else if (target && target.classList.contains('guests') && bigGuest > 0 && bigGuest > 0) {
          namedLittleGuests(littleGuest);
          namedGuests(bigGuest);
          dropdownInputGuest.innerHTML = `${bigGuest} ${guestName}, ${littleGuest} ${littleGuestName}`;
        } else if (target && target.classList.contains('guests') && bigGuest === 0) {
          counterText[2].innerHTML = 0;
          dropdownInputGuest.innerHTML = `Сколько гостей`;
        }
      });
    });
  }

  getGuests();

  function applyField() {
    apply.addEventListener('click', function (event) {
      const target = event.target;

      if (target && target.classList.contains('apply')) {
        document.querySelector('.dropdown-wrapper').classList.toggle('hide');
        document.querySelector('.dropdown__title').classList.toggle('dropdown__title_active');
      }
    });
  }

  applyField();

  function namedBedRooms(number) {
    if (number === 1) {
      bedRoomName = 'спальня';
    } else if (number > 1 && number < 5) {
      bedRoomName = 'cпальни';
    } else if (number > 5) {
      bedRoomName = 'cпален';
    }

    return bedRoomName;
  }

  function namedBeds(number) {
    if (number === 1) {
      bedName = 'кровать';
    } else if (number > 1 && number < 5) {
      bedName = 'кровати';
    } else if (number > 5) {
      bedName = 'кроватей';
    }

    return bedName;
  }

  function namedBathRooms(number) {
    if (number === 1) {
      bathName = 'ванная';
    } else if (number > 1 && number < 5) {
      bathName = 'ванные';
    } else if (number > 5) {
      bathName = 'ванных';
    }

    return bathName;
  }

  function getRooms() {
    counterRooms[0].innerHTML = 2;
    counterRooms[1].innerHTML = 2;
    counterWrapper.forEach((item, i, arr) => {
      arr[i].addEventListener('click', function (event) {
        let bedRooms = +counterRooms[0].innerHTML;
        let beds = +counterRooms[1].innerHTML;
        let bathRooms = +counterRooms[2].innerHTML;
        const target = event.target;

        if (target && target.classList.contains('rooms') && bedRooms > 0 && beds === 0 && bathRooms === 0) {
          namedBedRooms(bedRooms);
          dropdownInputRooms.innerHTML = `${bedRooms} ${bedRoomName}`;
        } else if (target && target.classList.contains('rooms') && bedRooms > 0 && beds > 0 && (bathRooms === 0 || bathRooms > 0)) {
          namedBedRooms(bedRooms);
          namedBeds(beds);
          dropdownInputRooms.innerHTML = `${bedRooms} ${bedRoomName}, ${beds} ${bedName}...`;
        } else if (target && target.classList.contains('rooms') && bedRooms === 0 && beds > 0 && bathRooms === 0) {
          namedBeds(beds);
          dropdownInputRooms.innerHTML = `${beds} ${bedName}`;
        } else if (target && target.classList.contains('rooms') && bedRooms === 0 && beds > 0 && bathRooms > 0) {
          namedBeds(beds);
          namedBathRooms(bathRooms);
          dropdownInputRooms.innerHTML = `${beds} ${bedName}, ${bathRooms} ${bathName}...`;
        } else if (target && target.classList.contains('rooms') && bedRooms > 0 && beds === 0 && bathRooms > 0) {
          namedBedRooms(bedRooms);
          namedBathRooms(bathRooms);
          dropdownInputRooms.innerHTML = `${bedRooms} ${bedRoomName}, ${bathRooms} ${bathName}...`;
        }
      });
    });
  }

  getRooms();
}

module.exports = dropdown;

/***/ }),

/***/ "./src/pug/libs/text-field/_mask.js":
/*!******************************************!*\
  !*** ./src/pug/libs/text-field/_mask.js ***!
  \******************************************/
/***/ (function(module) {

function maskedInput() {
  let maskFields = document.querySelectorAll('.text-field__input_masked');

  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };

  let dateInput = function (e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        formattedValue = "";

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (+inputNumbersValue[0] <= 3) {
      formattedValue = `${inputNumbersValue[0]}`;

      if (inputNumbersValue.length >= 2) {
        formattedValue += inputNumbersValue[1] + ".";

        if (+formattedValue.substring(0, 2) <= 0 || +formattedValue.substring(0, 2) > 31) {
          formattedValue = "Введите корректное значение дня";
        } else {
          if (inputNumbersValue.length >= 3) {
            formattedValue += inputNumbersValue[2];

            if (inputNumbersValue.length >= 4) {
              formattedValue += inputNumbersValue[3] + ".";
              console.log(formattedValue);

              if (+formattedValue.substring(3, 5) <= 0 || +formattedValue.substring(3, 5) > 12) {
                formattedValue = "Введите корректное значение месяца";
              } else {
                if (inputNumbersValue.length >= 5) {
                  formattedValue += inputNumbersValue[4];
                  console.log(formattedValue);

                  if (inputNumbersValue.length >= 6) {
                    formattedValue += inputNumbersValue[5];
                    console.log(formattedValue);

                    if (inputNumbersValue.length >= 7) {
                      formattedValue += inputNumbersValue[6];
                      console.log(formattedValue);

                      if (inputNumbersValue.length >= 8) {
                        formattedValue += inputNumbersValue[7];
                        console.log(formattedValue);

                        if (+formattedValue.substring(6, 10) <= 1945 || +formattedValue.substring(6, 10) > 2022) {
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

  maskFields.forEach(element => {
    element.addEventListener('input', dateInput);
  });
}

module.exports = maskedInput;

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pug_libs_text_field_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pug/libs/text-field/_mask */ "./src/pug/libs/text-field/_mask.js");
/* harmony import */ var _pug_libs_text_field_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pug_libs_text_field_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pug_libs_input_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pug/libs/input-dropdown/_dropdown */ "./src/pug/libs/input-dropdown/_dropdown.js");
/* harmony import */ var _pug_libs_input_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pug_libs_input_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__);



window.addEventListener('DOMContentLoaded', function () {
  _pug_libs_text_field_mask__WEBPACK_IMPORTED_MODULE_1___default()();
  _pug_libs_input_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default()();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"user": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktoxin"] = self["webpackChunktoxin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./src/user.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=user.de62b7497309488d3191.js.map