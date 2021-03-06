// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/globo-remove.js';})();

(function(){

    // the minimum version of jQuery we want
    var v = "1.3.2";

    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
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
        (window.myBookmarklet = function() {
          var selectorsToRemove = [
            '#site-header',
            '#related-content',
            'progress',
            '#banner_slb_meio',
            '#banner_slb_topo',
            '#header-cbn',
            '#header-produto',
            '#login-barreira',
            '#oglobo-shopping',
            '#onesignal-popover-container',
            '#relacionadas-topo',
            '#sidebar',
            '#outbrain-recomendacao2',
            '#footerOgloboPianoId',
            '.adv',
            '.adv-article',
            '.barra-globocom',
            '.aep-ads',
            '.banner-topo',
            '.barra-assine',
            '.box-vejaTambem',
            '.content-ads',
            '.container-adv',
            '.home-widgets-inferiores',
            '.hui-publicidade--banner_slb_fim',
            '.hui-publicidade--banner_slb_meio',
            '.publicidade',
            '.publicidade-materia',
            '.teads-inread',
            '.top-header',
            '.site-header',
            '.related-content',
            '.tudosobre-container',
            '[data-google-query-id]',
            '.block--advertising',
            '.article-related-links',
            'div.shopping',
            '.banner-bottom-fixed-cpnt'
          ];

          $('body').css('overflow', 'auto');
          $('body').css('display', 'contents');

          if($(location).attr('href') != 'https://www.globo.com/') {
            selectorsToRemove.push('#header');
            selectorsToRemove.push('#glb-topo');
          }

          var remover;

          if($('#frameContent').length > 0) {
            var contents = $('#frameContent').contents();
            remover = function(index, item) {
              contents.find(item).remove();
            };
          }
          else {
            remover = function(index, item) {
              $(item).remove();
            };
          }

          $.each(selectorsToRemove, remover);

        })();
    }

})();

