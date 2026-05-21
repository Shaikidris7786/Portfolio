var form = document.getElementById('eventsAPI')

form.addEventListener('submit',function(e){
  // Prevent auto submission of the form

  e.preventDefault()

  var Name = document.getElementById('Name')
  var Email = document.getElementById('Email')
  var Subject = document.getElementById('Subject')
  var Message = document.getElementById('Message')

  var requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "Subject": Subject.value,
      "Message": Message.value,
      "Email": Email.value,
      "Name": Name.value
    })
  };

  fetch("/.netlify/functions/event", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      alert('Event submitted!\nEvent ID: ' + result.data.eventId);
    })
    .catch(error => console.log('error', error));
    
  })
