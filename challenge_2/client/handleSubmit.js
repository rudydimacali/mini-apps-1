$(document).ready(function() {
  $("form").submit(function(evt) {
    evt.preventDefault();
    var formData = new FormData($(this)[0]);
    $.ajax({
      url: "/",
      type: "POST",
      data: formData,
      contentType: false,
      enctype: "multipart/form-data",
      processData: false,
      success: function(response) {
        $("#csvReport").text(response);
      }
    });
    return false;
  });
});
