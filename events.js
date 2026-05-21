var form = document.getElementById('eventsAPI')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  var Name = document.getElementById('Name')
  var Email = document.getElementById('Email')
  var Subject = document.getElementById('Subject')
  var Message = document.getElementById('Message')

  fetch('/.netlify/functions/trigger-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Subject: Subject.value,
      Message: Message.value,
      Email: Email.value,
      Name: Name.value
    })
  })
    .then(function (response) {
      console.log(response.status)
      return response.text()
    })
    .then(function (result) { console.log(result) })
    .catch(function (error) { console.log('error', error) })
})
