// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/em-remove.js';})();

(function(){

    // the minimum version of jQuery we want
    var v = "1.3.2";

    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                initMyBookmarklet();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        initMyBookmarklet();
    }

    function initMyBookmarklet() {
      var selectorsToRemove = [
        'header.header-fixed',
        'nav.nav-fix',
        'div.onesignal-bell-launcher-button',
        'nav.fixed-btn-uai',
        'header.header-border-underline',
        'div div.read-more-widget',
        'div.ads',
        'div.read-more',
        'div.publicidade',
        'div.em-publicidade-retangulo-interna',
        'section.read-more-about',
        'aside',
        'div#taboola-below-article-thumbnails',
        'dev#onesignal-bell-container'
      ];

      selectorsToRemove.forEach(function(item) {
        var items = $(item);
        if(items)
          items.remove();
        else
          console.log('Couldn\'t find items for ' + item);
      });

    }

})();
