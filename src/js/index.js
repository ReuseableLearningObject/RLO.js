$(function() {
  $('ul.tabs li:first').addClass('active');
  $('.block article').hide();
  $('.block article:first').show();
  $('ul.tabs li').on('click', function() {
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
})

$('#navigation span').hide();
$('#navigation a').click(function(e) {

  clicked = $(this).attr('id');
  $('#navigation a').removeClass('active');
  $(this).addClass('active');
  $('#navigation span').hide();
  $('#navigation span[rel=' + clicked + ']').show();
  e.preventDefault();
});
