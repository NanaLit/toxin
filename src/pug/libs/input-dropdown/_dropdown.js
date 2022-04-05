
function dropdown() {
  let dropdownInput = document.querySelectorAll('.dropdown__title'),
      dropdownInputGuest = document.querySelector('.dropdown__title_guests'),
      dropdownContent = document.querySelectorAll('.dropdown-wrapper'),
      plus = document.querySelectorAll('.plus'),
      minus = document.querySelectorAll('.minus'),
      counter = document.querySelectorAll('.counter__number'),
      guests = document.querySelectorAll('.guests>.counter__number'),
      rooms = document.querySelectorAll('.rooms>.counter__number'),
      guestName = 'гость',
      guestNameMinus = 'гостей',
      littleGuest = 'младенец';
      
  dropdownInput.forEach((item, i, arr) => {
    arr[i].addEventListener('click', () => {
      item.classList.toggle('dropdown__title_active');
      dropdownContent[i].classList.toggle('hide');
    });
  });

  function namedGuests(numbers) {
    if (numbers > 1 && numbers < 5) {
      guestName = 'гостя';
    } else if (numbers >= 5) {
      guestName = 'гостей';
    }
    return guestName;
  }
  function namedGuestsMinus(numbers) {
    if (numbers < 5 && numbers > 1) {
      guestName = 'гостя';
    } else if ( numbers === 1) {
      guestName = 'гость';
    }
    return guestName;
  }

  function namedLittleGuests(number) {
    if (number > 1 && number < 5) {
      littleGuest = 'младенца';
    } else if (number >= 5) {
      littleGuest = 'младенцев';
    }
    return littleGuest;
  }

  function namedLittleGuestsMinus(number) {
    if (number < 5 && number > 1) {
      littleGuest = 'младенца';
    } else if (number === 1) {
      littleGuest = 'младенец';
    }
    return littleGuest;
  }
  
  plus.forEach((item, i, arr) => {
    let count = 0;
      arr[i].addEventListener('click', function(event) {
        const target = event.target;
        count = ++count;
        if (count <= 5) {
        counter[i].innerHTML = count;
        if (target && target.classList.contains('guests') && +counter[2].innerHTML === 0) {
          namedGuests(+counter[1].innerHTML+(+counter[0].innerHTML));
          dropdownInputGuest.innerHTML = `${+counter[1].innerHTML+(+counter[0].innerHTML)} ${guestName}`;
        } else if (target && target.classList.contains('guests') && +counter[2].innerHTML > 0) {
          namedLittleGuests(+counter[2].innerHTML);
          dropdownInputGuest.innerHTML = `${+counter[1].innerHTML+(+counter[0].innerHTML)} ${guestName}, ${+counter[2].innerHTML} ${littleGuest}`;
        }
      } else {
        count = 0;
      }
    });
  });
  
  minus.forEach((item, i, arr) => {
    arr[i].addEventListener('click', function(event) {
      const target = event.target;
      let count = counter[i].innerHTML;
      count = --count;
      if (count >= 0) {
        counter[i].innerHTML = count;
        console.log(count);
        if (target && target.classList.contains('guests') && +counter[2].innerHTML === 0) {
          namedGuestsMinus(+counter[1].innerHTML+(+counter[0].innerHTML));
          dropdownInputGuest.innerHTML = `${+counter[1].innerHTML+(+counter[0].innerHTML)} ${guestName}`;
        } else if (target && target.classList.contains('guests') && +counter[2].innerHTML > 0) {
          namedLittleGuestsMinus(+counter[2].innerHTML);
          dropdownInputGuest.innerHTML = `${+counter[1].innerHTML+(+counter[0].innerHTML)} ${guestName}, ${+counter[2].innerHTML} ${littleGuest}`;
        }
      } else {
        counter[i].innerHTML = 0;
      }
    });
  });
  
}
module.exports = dropdown;