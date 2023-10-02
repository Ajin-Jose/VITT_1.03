document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    // Create an object to store the form data
    var formDataObj = {};
    formData.forEach(function(value, key) {
      formDataObj[key] = value;
    });

    // Log the form data as JSON to the console
    console.log(JSON.stringify(formDataObj));

    fetch('https://script.google.com/macros/s/AKfycbzziKW6Rm3RBahni-vUjsv3CKXcEoCocNcAE15QzfOeV2qBAaJW8S3oRabeTYPeQNa63w/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      if (data === 'success') {
        alert('Form submitted successfully');
      } else if (data === 'failure') {
        alert('Failed, please try again');
      }
    })
    .catch(error => {
      alert('Error occurred. Please try again');
    });
  });


  function navigateToIndexPage() {
    window.location.href = 'form.html';
    // window.location.href = 'index.html';
}


