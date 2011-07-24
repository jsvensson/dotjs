// Stylesheet injection
var link = $("<link>");
link.attr({
	type: 'text/css',
	rel: 'stylesheet',
	href: 'http://dl.dropbox.com/u/569190/git/dotjs/forums.penny-arcade.com.css'
});
// $("head").append(link);

// Bold thread title brackets
$(".DiscussionName a.Title").html(function() {
	var $txt = $(this).html();
	$txt = $txt.replace(/(\[.*?\])/g, "<b>$1</b>");
	return($txt);
});
// Insert URL prompt button
$(".ButtonBar").append('<div class="PromptUrl"><span>prompturl</span></div>');

