$(function() {
  var showPartial = function(href) {
    $.ajax({
      method: 'GET',
      url: "http://localhost:3000" + href,
      success: function(html) {
        $('.description').empty();
        $('#' + href.replace('/','')).html(html);
      }
    });
  };
  
  $("a").click(function(event) {
    var href = $(this).attr("href");
    
    history.pushState({}, '', href);
    
    showPartial(href);
    
    event.preventDefault();
  });
  
  $.history.on('change', function(event, url, type) {
      showPartial(url);
  }).listen('pathname');
});