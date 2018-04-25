// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/simulados.js';})();

(function() {
  $(document).keydown(function(e) {

    var modifier;

    if(/^Mac/.test(navigator.platform))
      modifier = e.ctrlKey;
    else
      modifier = e.altKey;

    if(!modifier) return;
      
    if(e.keyCode == 'E'.charCodeAt(0)) {
      $('.editar_questao')[0].click()
      event.preventDefault();
    }

    if(e.keyCode == 'M'.charCodeAt(0)) {
      $("[data-id='id_materia']").click()
      $("._materias_ .bs-deselect-all").click()
      event.preventDefault();
    }

    if(e.keyCode == 'O'.charCodeAt(0)) {
      $("[id='action_questao']").click()
      event.preventDefault();
    }

  })
})();
