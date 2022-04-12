
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
    arr[i].addEventListener('click', function() {
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
    clear.addEventListener('click', function(event) {
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
    if (+counterText[1].innerHTML+(+counterText[0].innerHTML) !==0) {
      clear.classList.remove('hidden');
    }
    if (+counterText[1].innerHTML+(+counterText[0].innerHTML) ===0) {
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
      arr[i].addEventListener('click', function(event) {
        const target = event.target;
        let bigGuest = +counterGuests[1].innerHTML+(+counterGuests[0].innerHTML);
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
    apply.addEventListener('click', function(event) {
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
      arr[i].addEventListener('click', function(event) {
        let bedRooms = +counterRooms[0].innerHTML;
        let beds = +counterRooms[1].innerHTML;
        let bathRooms = +counterRooms[2].innerHTML;
        const target = event.target;
        if (target && target.classList.contains('rooms') && bedRooms > 0 && beds === 0 && bathRooms ===0) {
          namedBedRooms(bedRooms);
          dropdownInputRooms.innerHTML = `${bedRooms} ${bedRoomName}`;
        } else if (target && target.classList.contains('rooms') && bedRooms > 0 && beds > 0 && (bathRooms ===0 || bathRooms > 0)) {
          namedBedRooms(bedRooms);
          namedBeds(beds);
          dropdownInputRooms.innerHTML = `${bedRooms} ${bedRoomName}, ${beds} ${bedName}...`;
        } else if (target && target.classList.contains('rooms') && bedRooms === 0 && beds > 0 && bathRooms ===0) {
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