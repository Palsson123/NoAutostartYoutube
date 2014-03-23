$(document).ready(function() {
  
  content = $('div.c4-player-container').html();
  content = content.replace('autoplay&amp;quot;: &amp;quot;1', 'autoplay&amp;quot;: &amp;quot;0');
  $('div.c4-player-container').html(content);
  
});