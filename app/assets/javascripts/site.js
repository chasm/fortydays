$(function() {
  var showPartial = function(href) {
    console.log(">> showPartial called with href = " + href);
    console.log(">> calling AJAX GET to http://localhost:3000" + href);
    $.ajax({
      method: 'GET',
      url: "http://localhost:3000" + href,
      success: function(html) {
        console.log(">> Success!");
        console.log(">> Emptying div.description divs.");
        console.log($('.description'));
        $('.description').empty();
        console.log(">> Adding the html to #" + href.replace('/',''));
        console.log(html);
        $('#' + href.replace('/','')).html(html);
      }
    });
  };
  
  $("a").click(function(event) {
    console.log(">> Link clicked!");
    var href = $(this).attr("href");
    console.log(">> href of the link is " + href);
    history.pushState({}, '', href);
    console.log(">> Pushed " + href + " onto the history (see address bar)");
    showPartial(href);
    console.log(">> Preventing the page reload!");
    event.preventDefault();
  });
  
  $.history.on('change', function(event, url, type) {
      showPartial(url);
  }).listen('pathname');
});