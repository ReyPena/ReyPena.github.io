$(document).ready(function () {
  // Open transition
  $('.nav a').on('click', function (e) {
    var element = $(e.target).text().toLowerCase();
    $('#main').hide();
    $('#' + element).fadeIn('slow');
  });

  // Close transition
  $('.box #close').on('click', function (e) {
    var element = $(e.target).parent('.box').attr('id');
    $('#' + element).hide();
    $('#main').fadeIn('slow');
  });
})
