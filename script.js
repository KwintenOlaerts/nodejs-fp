
const axios = require('axios');
const validator = require('email-validator');
var mail = "test@email.com";
var result = validator.validate(mail);

console.log(result);




// Make a request for a user with a given ID
axios.get("https://haveibeenpwned.com/api/v2/breachedaccount/kwintenolaerts@hotmail.com", { headers: { 'User-Agent': 'lerr-tester'} })
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


