// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/kimble.js';})();

(function() {

  $(document).keydown(function(e) {
    var modifier;

    if(/^Mac/.test(navigator.platform))
      modifier = e.ctrlKey;
    else
      modifier = e.altKey;

    if(modifier && (e.keyCode == 78 || e.keyCode == 80)) {
      var amount;
      if(e.keyCode == 78)
        amount = 1;
      else
        amount = -1;


      var rowKey = $('input[row-key]:visible').attr('row-key');
      var currentDate = $('input[row-key]:visible').attr('entry-date');


      var nextDate;
      for(var i=1; i < 4; i++) {
        nextDate = new Date(currentDate + ' 00:00:00');
        nextDate.setDate(nextDate.getDate() + amount*i);
        nextDate = nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();

        var nextField = $("tr#" + rowKey + " input[entry-date='" + nextDate + "']");

        if(nextField.length > 0)
          break;
      }

      if(nextField.length == 0) {
        $("input.start-time[row-key='" + rowKey + "'][entry-date='" + currentDate + "']").focus().focusin();
      }
      else {
        nextField.focus().focusin();
        window.setTimeout(function() { $("input.start-time[row-key='" + rowKey + "'][entry-date='" + nextDate + "']").focus().focusin(); }, 100)
      }
    }
  })
})();
