import $ from 'jquery';

var url = 'http://api.randomuser.me/?nat=us&results=12'; // ?nat=us & results=12 the & symbol is used
var getData = $.getJSON(url);                            // to get multiple API's on one page
var insertData = $('.users');

// 1. Get the Results from the URL
getData.then(function (response){
  var gotData = response.results;
  console.log(gotData);

// 2. Change the results from an array into an object
// Did that by by using forEach
gotData.forEach(function (objects){
  var usersInfo = inputTemplate(objects);

// 3. Appended the information from users into the class ".users"
insertData.append(usersInfo);

});

});
// 4. Made a template for the user data
function inputTemplate (obj) {

  return `
      <div class ="usercontainer">
        <div class="image">
          <img src= ${obj.picture.large}>
        </div>
        <div class="name">
          <span>${obj.name.first} ${obj.name.last}</span>
        </div>
        <div class="email">
          ${obj.email}
        </div>
        <div class="address">
          <p>${obj.location.street}</p>
          <p>${obj.location.city}, ${obj.location.state} ${obj.location.postcode}</p>
        </div>
        <div class="number">
          ${obj.phone}
        </div>
        <div class="ss">
          <p>SS#${obj.id.value}<p>
        </div>
      </div>
      `;
}
