function getQuote() {
  $.ajax({
    url: 'http://quotesondesign.com/api/3.0/api-3.0.json?callback=getQuote',
    dataType: 'jsonp',
    type: 'GET',
    cache: false,
    success: function (data) {
      document.getElementById('quote').innerHTML="\"" + data.quote + "\"";
      document.getElementById('author').innerHTML="-" + data.author;
      console.log(data);
    }
  });
}

$(document).ready(function() {
  getQuote();
});

$('#newQuote').on('click', function(e) {
  getQuote();
});

$('.tweet').on('click', function(e) {
  e.preventDefault();
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + $('.quote').text() + " -" + $('.author').text());
  console.log($('.quote').text() + $('.author').text());
});

// $(document).ready(function() {
//   $('#newQuote').on('click', function(e) {
//     e.preventDefault();
//     $.ajax( {
//       url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
//       dataType: 'jsonp',
//       callback: 'callback',
//       type: 'GET',
//       success: function(data) {
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $('#author').text(post.title);
//         $('#quote').html(post.content);
//         console.log(post.title);
//       },
//       cache: false
//     });
//   });
// });
