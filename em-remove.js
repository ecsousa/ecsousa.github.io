// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/em-remove.js';})();

(function() {
  var selectorsToRemove = [
    'header.header-fixed',
    'nav.nav-fix',
    'div.onesignal-bell-launcher-button',
    'nav.fixed-btn-uai',
    'header.header-border-underline',
    'div div.read-more-widget',
    'div.ads',
    'div.em-publicidade-retangulo-interna',
    'section.read-more-about',
    'aside',
    'div#taboola-below-article-thumbnails'
  ];

  selectorsToRemove.forEach(function(item) {
    var items = $(item);
    if(items)
      items.remove();
    else
      console.log('Couldn\'t find items for ' + item);
  });

})();
