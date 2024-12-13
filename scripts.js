function redirectUser() {
    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="accountType"]:checked');
  
    if (!selectedOption) {
      alert('Please select an account type before continuing.');
      return;
    }
  
    // Redirect based on the selected option
    const accountType = selectedOption.value;
    if (accountType === 'individual') {
      window.location.href = 'indi.html'; // Replace with the actual page URL
    } else if (accountType === 'organization') {
      window.location.href = 'organ.html'; // Replace with the actual page URL
    }
  }
  