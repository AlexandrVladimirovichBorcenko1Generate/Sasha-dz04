function getLiText() {
    const firstItem = document.querySelector('li');
    return firstItem.textContent;
  }
  
  console.log(getLiText());
  
  function getLiTextArray() {
    const liElements = document.querySelectorAll('li');
    const textArray = Array.from(liElements).map(li => li.textContent);
    return textArray;
  }
  
  console.log(getLiTextArray());
  
  function getClassListTextArray() {
    const listItems = document.querySelectorAll('.list-item');
    const textArray = Array.from(listItems).map(item => item.textContent);
    return textArray;
  }
  
  console.log(getClassListTextArray());
  
  function getClassListArray() {
    const listItems = document.querySelectorAll('.list-item');
    const classArray = Array.from(listItems).map(item => item.getAttribute('class'));
    return classArray;
  }
  
  console.log(getClassListArray());
  
  function getDataTestIdArray() {
    const listItems = document.querySelectorAll('.list-item');
    const dataTestIdArray = Array.from(listItems).map(item => item.getAttribute('data-test-id'));
    return dataTestIdArray;
  }
  
  console.log(getDataTestIdArray());
  
  function getBrokenDataTestIdArray() {
    const listItems = document.querySelectorAll('.list-item');
    const brokenDataTestIdArray = Array.from(listItems).filter(item => !item.getAttribute('class').includes(item.textContent)).map(item => item.getAttribute('data-test-id'));
    return brokenDataTestIdArray;
  }
  
  console.log(getBrokenDataTestIdArray());
  
  function updateListItems() {
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
      const dataTestId = item.getAttribute('data-test-id');
      item.textContent = `${dataTestId} ${item.textContent}`;
    });
  }
  
  updateListItems();
  
  function hackLogin() {
    const loginInput = document.getElementById('secret-login');
    loginInput.value = 'You were hacked';
  }
  
  hackLogin();
  