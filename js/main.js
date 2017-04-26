function getQuote() {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    dataType: 'jsonp',
    type: 'GET',
    success: function (data) {
      console.log(data);
      $('.quote').text("\"" + data[0].content.replace('<p>','').replace('</p>','') + "\"");
      $('.author').text("-" + data[0].title);
    },
    cache: false
  });
}

$(document).ready(function() {
  getQuote();
});

$('.newQuote').on('click', function(e) {
  getQuote();
});

$('.tweet').on('click', function(e) {
  e.preventDefault();
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + $('.quote').text() + " -" + $('.author').text());
  console.log($('.quote').text() + $('.author').text());
});
