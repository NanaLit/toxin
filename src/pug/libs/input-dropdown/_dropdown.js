function dropdown() {
  let dropdownInput = document.querySelector('.dropdown__title'),
      dropdownContent = document.querySelector('.dropdown-wrapper');
  console.log(dropdownContent);
  console.log(dropdownInput);
  function hideListContent() {
    dropdownContent.classList.remove('show');
    dropdownContent.classList.add('hide');
    dropdownInput.style.borderRadius = "5px";
  }
  function showListContent() {
    dropdownContent.classList.remove('hide');
    dropdownContent.classList.add('show');
    dropdownInput.style.borderRadius = "5px 5px 0 0";
  }

  dropdownInput.addEventListener('click', (e) => {
    if (e.target === dropdownInput && dropdownContent.classList.contains('hide')) {
      showListContent();
    } else {
      hideListContent();
    }
  });
  
}

module.exports = dropdown;