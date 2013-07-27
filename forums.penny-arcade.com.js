// Stylesheet injection
var link = $("<link>");
link.attr({
	type: 'text/css',
	rel: 'stylesheet',
	href: 'http://dl.dropbox.com/u/569190/git/dotjs/forums.penny-arcade.com.css'
});
$("head").append(link);

// Thread title font
$(".DiscussionName a.Title").css('font-family', 'helvetica, sans-serif');

// Bold thread title brackets
$(".DiscussionName a.Title").html(function() {
	var $txt = $(this).html();
	$txt = $txt.replace(/(\[.*?\])/g, "<b>$1</b>");
	return($txt);
});

