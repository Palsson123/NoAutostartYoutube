$(document).ready(function() {
  
  content = $('div.c4-player-container').html();
  if(content!=undefined)
  {
	  content = content.replace('autoplay&amp;quot;: &amp;quot;1', 'autoplay&amp;quot;: &amp;quot;0');
								
	  $('div.c4-player-container').html(content);
  }
});
function disableAutoPlay(){
  content = $('div.c4-player-container').html();
  if(content!=undefined)
  {
	  content = content.replace('autoplay&amp;quot;: &amp;quot;1', 'autoplay&amp;quot;: &amp;quot;0');
								
	  $('div.c4-player-container').html(content);
  }
}
chrome.extension.onRequest.addListener(function(request) {
   if (request === "autoplay") {
      disableAutoPlay();
   }
});