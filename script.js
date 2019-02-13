const axios = require('axios');
const emailMan = require('email-validator');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


axios.get('https://api.github.com/users/KwintenOlaerts')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  



const url = 'https://haveibeenpwned.com/api/v2/{service}/'
axios.get(url).then(response => console.log(response));
