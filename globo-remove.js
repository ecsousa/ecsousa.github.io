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
            '#banner_slb_meio',
            '#banner_slb_topo',
            '#footerOgloboPianoId',
            '#header-cbn',
            '#header-produto',
            '#login-barreira',
            '#oglobo-shopping',
            '#onesignal-popover-container',
            '#outbrain-recomendacao2',
            '#relacionadas-topo',
            '#related-content',
            '#sidebar',
            '#site-header',
            '.adv',
            '.adv-article',
            '.aep-ads',
            '.article-related-links',
            '.banner-bottom-fixed-cpnt',
            '.banner-topo',
            '.barra-assine',
            '.barra-globocom',
            '.block--advertising',
            '.block__advertising',
            '.box-vejaTambem',
            '.container-adv',
            '.content-ads',
            '.home-widgets-inferiores',
            '.hui-publicidade--banner_slb_fim',
            '.hui-publicidade--banner_slb_meio',
            '.publicidade',
            '.publicidade-materia',
            '.related-content',
            '.site-header',
            '.teads-inread',
            '.top-header',
            '.tudosobre-container',
            '[data-google-query-id]',
            'div.shopping',
            'progress'
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

