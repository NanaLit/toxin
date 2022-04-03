
function dropdown() {
  let dropdownInput = document.querySelectorAll('.dropdown__title'),
      dropdownContent = document.querySelectorAll('.dropdown-wrapper');
      
  dropdownInput.forEach((item, i, arr) => {
    arr[i].addEventListener('click', () => {
      item.classList.toggle('dropdown__title_active');
      dropdownContent[i].classList.toggle('hide');
    });
  });
}
module.exports = dropdown;