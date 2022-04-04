
function dropdown() {
  let dropdownInput = document.querySelectorAll('.dropdown__title'),
      dropdownInputGuest = document.querySelector('.dropdown__title_guests'),
      dropdownContent = document.querySelectorAll('.dropdown-wrapper'),
      plus = document.querySelectorAll('.plus'),
      minus = document.querySelectorAll('.minus'),
      counter = document.querySelectorAll('.counter__number'),
      guests = document.querySelectorAll('.guests>.counter__number'),
      rooms = document.querySelectorAll('.rooms>.counter__number');
      
  dropdownInput.forEach((item, i, arr) => {
    arr[i].addEventListener('click', () => {
      item.classList.toggle('dropdown__title_active');
      dropdownContent[i].classList.toggle('hide');
    });
  });
  
  plus.forEach((item, i, arr) => {
    let count = 0;
      arr[i].addEventListener('click', function(event) {
        const target = event.target;
        count = ++count;
        if (count <= 5) {
        counter[i].innerHTML = count;
        if (target && target.classList.contains('guests')) {
          dropdownInputGuest.innerHTML = `${+counter[1].innerHTML+(+counter[0].innerHTML)} гостя`;
        }
      } else {
        count = 0;
      }
    });
  });
  
  minus.forEach((item, i, arr) => {
    arr[i].addEventListener('click', () => {
      let count = counter[i].innerHTML;
      count = --count;
      if (count >= 0) {
        counter[i].innerHTML = count;
      } else {
        counter[i].innerHTML = 0;
      }
    });
  });
  
}
module.exports = dropdown;