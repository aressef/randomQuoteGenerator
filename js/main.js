function ajaxCall() {
  $.ajax({
      url: 'http://quotesondesign.com/api/3.0/api-3.0.json',
      dataType: 'jsonp',
      callback: 'callback',
      type: 'GET',
      success: function (data) {
        var post = data.shift();
        document.getElementById('quote').innerHTML="\"" + data.quote + "\"";
        document.getElementById('author').innerHTML="-" + data.author;
        document.getElementById('newQuote').addEventListener('click',function() {
          ajaxCall();
        });
      }
  });
}


ajaxCall();


// $('.newQuote').on('click', function(e) {
//   e.preventDefault();
//   $.ajax( {
//     url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//     success: function(data) {
//       var post = data.shift(); // The data is an array of posts. Grab the first one.
//       $('#quote').text(post.title);
//       $('#author').html(post.content);
//       console.log('hello');
//     },
//     cache: false
//   });
// });
