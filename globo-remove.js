// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/globo-remove.js';})();

(function() {
  var selectorsToRemove = [
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
    '.aep-ads',
    '.banner-topo',
    '.barra-assine',
    '.box-vejaTambem',
    '.content-ads',
    '.home-widgets-inferiores',
    '.hui-publicidade--banner_slb_fim',
    '.hui-publicidade--banner_slb_meio',
    '.publicidade',
    '.publicidade-materia',
    '.teads-inread',
    '.top-header',
    '.site-header',
    '.tudosobre-container',
    '[data-google-query-id]'
  ];

  $('body').css('overflow', 'auto');
  $('body').css('display', 'contents');

  if($(location).attr('href') != 'http://www.globo.com/') {
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
