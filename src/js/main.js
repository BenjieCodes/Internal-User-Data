import $ from 'jquery';

var url = 'https://randomuser.me/api/';
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
  return `<div class="image">
              <img src= ${obj.picture.large}>
            <div class="name">
                ${obj.name.first} ${obj.name.last}
              <div class="email">
                  ${obj.email}
                <div class="address">
                  <div class="number">
                    <div class="ss">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;

}
