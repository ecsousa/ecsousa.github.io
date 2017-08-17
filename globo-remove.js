// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/globo-remove.js';})();

(function() {
  var selectorsToRemove = [
    '#banner_slb_meio',
    '#banner_slb_topo',
    '#glb-topo',
    '#header',
    '#header-cbn',
    '#header-produto',
    '#oglobo-shopping',
    '#onesignal-popover-container',
    '#relacionadas-topo',
    '#sidebar',
    '.aep-ads',
    '.box-vejaTambem',
    '.content-ads',
    '.home-widgets-inferiores',
    '.hui-publicidade--banner_slb_fim',
    '.hui-publicidade--banner_slb_meio',
    '.publicidade',
    '.publicidade-materia',
    '.teads-inread',
    '.top-header',
    '.tudosobre-container',
    '[data-google-query-id]'
  ];

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
