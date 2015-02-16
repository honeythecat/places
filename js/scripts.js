$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNotes = $("input#new-notes").val();
    var newEntry = { adventurerName: inputtedName, locationVisited: inputtedLocation, date: inputtedDate, notes: inputtedNotes };

    $("ul#people").append("<li><span class='name'>" + newEntry.adventurerName + "</span></li>");

    $("input#new-name").val("");
    $("input#new-location").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");

    $(".name").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newEntry.adventurerName);
      $(".location").text(newEntry.locationVisited);
      $(".date").text(newEntry.date);
      $(".notes").text(newEntry.notes)
    });
  });
});
