// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
// xhr.send(null);
//
//
// xhr.onreadystatechange = function () {
//   var DONE = 4;
//   var OK = 200;
//   if (xhr.readyState === DONE) {
//     if  (xhr.status = OK) {
//       console.log(xhr.responseText)
//     } else {
//       console.log('Error: ' + xhr.status);
//     }
//   }
// };



function processJSONResponse(data) {
  var dataFromServer = data;
  console.log("dataFromServer");
}


var script = document.createElement('script');
script.src = 'http://quotesondesign.com/api/3.0/api-3.0.json';
document.body.appendChild(script);
