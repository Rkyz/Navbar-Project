const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', function() {
  if (dropdownContent.classList.contains('active')) {
    dropdownContent.classList.remove('active');
    dropdownButton.classList.remove('active');
  } else {
    dropdownContent.classList.add('active');
    dropdownButton.classList.add('active');
  }
});
