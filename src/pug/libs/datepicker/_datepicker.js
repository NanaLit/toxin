
function createButtons() {
  const parent = document.querySelectorAll('.air-datepicker');
  console.log(parent);
  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add('control');
  buttonWrapper.innerHTML = `
    <span class="titles titles_h3 titles_h3_purple clear">очистить</span>
    <span class="titles titles_h3 titles_h3_purple apply">применить</span>
  `;
  console.log(buttonWrapper);
  parent.forEach((item, i, arr) => {
    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add('control');
    buttonWrapper.innerHTML = `
    <span class="titles titles_h3 titles_h3_purple clear">очистить</span>
    <span class="titles titles_h3 titles_h3_purple apply">применить</span>
  `;
    console.log(item);
    arr[i].appendChild(buttonWrapper);
  });
  
}

module.exports = createButtons;