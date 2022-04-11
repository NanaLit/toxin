
function dropdown() {
  let dropdownInput = document.querySelectorAll('.dropdown__title'),
      dropdownInputGuest = document.querySelector('.dropdown__title_guests'),
      dropdownContent = document.querySelectorAll('.dropdown-wrapper'),
      counterWrapper = document.querySelectorAll('.counter'),
      counterText = document.querySelectorAll('.counter__number'),
      count,
      clear = document.querySelector('.clear'),
      apply = document.querySelector('.apply'),
      guestName = 'гость',
      littleGuestName = 'младенец';
      
  dropdownInput.forEach((item, i, arr) => {
    arr[i].addEventListener('click', () => {
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
        let bigGuest = +counterText[1].innerHTML+(+counterText[0].innerHTML);
        let littleGuest = +counterText[2].innerHTML;
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
        console.log('hi');
        document.querySelector('.dropdown-wrapper').classList.toggle('hide');
        document.querySelector('.dropdown__title').classList.toggle('dropdown__title_active');
      }
    });
  }
  applyField();
}
module.exports = dropdown;