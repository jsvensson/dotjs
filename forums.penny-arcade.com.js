// Bind Ctrl-S to submit post

$.getScript('jquery.hotkeys.js', function() {
  /*
  $(document).ready(function(){
    $('#Form_Body').bind('keyup', 'ctrl-s', function(){
      $('#Form_Comment').submit();
    });
  });
  */
});

// Stylesheet injection

var link = $("<link>");
link.attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: 'http://dl.dropbox.com/u/569190/dotjs/forums.penny-arcade.com.css'
});
$("head").append(link);

// Bold thread title brackets
$(".DiscussionName a.Title").html(function() {
	var txt = $(this).html();
	txt = txt.replace(/(\[.*\])/, "<b>$1</b>");
	return(txt);
});



