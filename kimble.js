// Bookmarklet URL:
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ecsousa.github.io/kimble.js';})();

(function() {
  $(document).keydown(function(e) {
    if(e.altKey && (e.keyCode == 78 || e.keyCode == 80)) {
      var amount;
      if(e.keyCode == 78)
        amount = 1;
      else
        amount = -1;


      var rowKey = $('input[row-key]:visible').attr('row-key');
      var dayId = $('input[row-key]:visible').attr('day-id');
      var currentDate = $("tr#" + rowKey + " input[day-id='" + dayId + "']").attr('entry-date');

      var nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + amount);
      nextDate = nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();

      var nextField = $("tr#" + rowKey + " input[entry-date='" + nextDate + "']");

      nextField.focus().focusin();
      window.setTimeout(function() { $("input.start-time[row-key='" + rowKey + "'][entry-date='" + nextDate + "']").focus().focusin(); }, 100)
    }
  })
})();
