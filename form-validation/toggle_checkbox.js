function checkboxChange(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (event.target.value === 'red' && event.target.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox.value === 'green') {
          checkbox.disabled = true;
        }
      });
    } else if (event.target.value === 'green' && event.target.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox.value === 'red') {
          checkbox.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((checkbox) => {
        if (checkedCheckboxes.length === 0) {
          checkbox.disabled = false;
        }
      });
    }
  }  