const API_URL = 'http://localhost:8080/api/products';

// Make a request for a user with a given ID
axios.get(API_URL)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });