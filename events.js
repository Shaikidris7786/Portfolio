var form = document.getElementById('eventsAPI')

form.addEventListener('submit',function(e){
  // Prevent auto submission of the form

  e.preventDefault()

  var Name = document.getElementById('Name')
  var Email = document.getElementById('Email')
  var Subject = document.getElementById('Subject')
  var Message = document.getElementById('Message')

  // Postman Code
  var myHeaders = new Headers();
  myHeaders.append("topicName", "Rule Trigger Event");
  myHeaders.append("eventName", "Shaik HTML Test");
  myHeaders.append("eventVersion", "1.0");
  myHeaders.append("tenantId", "6998e9cf-b354-450f-80fe-2730b1c1dc61");
  myHeaders.append("sharedSecret", "uy5RgBP+9FfescqwBFjU7fsE/jxH3RI/kkJ+pv5g3D5RuUAprW3+tu5f5MR95x1R");
  myHeaders.append("accessKey", "97f48900-33a5-44f4-b591-6c7a19f01d1a");
  myHeaders.append("Content-Type", "application/json");

  console.log(myHeaders)

  var raw = JSON.stringify({
    "Subject": Subject,
    "Message": Message,
    "Email": Email,
    "Name": Name
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };
  
  fetch("https://demo-marscotest.gainsightcloud.com/v1.0/api/eventManager/event", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  })
