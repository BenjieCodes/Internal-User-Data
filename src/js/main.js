import $ from 'jquery';

var url = 'http://api.randomuser.me/?nat=us&results=12';
var getData = $.getJSON(url);
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

  if (obj.nat ==="US") {
  return `<div class="image">
              <img src= ${obj.picture.large}>
            <div class="name">
                ${obj.name.first} ${obj.name.last}
              <div class="email">
                  ${obj.email}
                <div class="address">
                  <p>${obj.location.street}</p>
                  <p>${obj.location.city}, ${obj.location.state} ${obj.location.postcode}</p>
                  <div class="number">
                      ${obj.phone}
                    <div class="ss">
                      ${obj.id.value}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
}

}
