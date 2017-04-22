// JavaScript


$(document).ready(function(){

     $(".quote").text("I'm not your guy, Pal!");

    // $('.buttons').on('click', 'button', function() {
    //   alert("helllllllo");
    // });


     $('.buttons').on('click', '.refresh', function() {
       $.ajax('http://quotesondesign.com/api/3.0/api-3.0.json?callback=my_function', {
         success: function() {
           $(".quote").text("quote");
           alert("it worked");
         }
       });
     });

});




// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//  $(.quote).append(a[0].content + "<p>— " + a[0].title + "</p>")
// });
