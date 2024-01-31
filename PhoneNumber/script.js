function checkPhoneNumber() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
      alert('Please provide a phone number');
      return;
    }

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    if (regex.test(userInput)) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
      resultsDiv.style.color = 'green';
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
      resultsDiv.style.color = 'red';
    }
  }

  function clearResults() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
  }