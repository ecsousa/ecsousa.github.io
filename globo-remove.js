// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/globo-remove.js';})();

(function() {
  var selectorsToRemove = [
    '#header-cbn',
    '#banner_slb_meio',
    '#banner_slb_topo',
    '#glb-topo',
    '#header',
    '#header-produto',
    '#oglobo-shopping',
    '#onesignal-popover-container',
    '#relacionadas-topo',
    '#sidebar',
    '.aep-ads',
    '.box-vejaTambem',
    '.content-ads',
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
