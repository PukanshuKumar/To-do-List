$(document).ready(function () {
  // select input field
  var input_field = $("#inpur_field");

  // Execute function on enter
  $("#inpur_field").keyup(function (e) {
    if (e.which == 13) {
      $("#add_task").click();
    }
  });

  // Clear input field
  $("#clear_task").click(function () {
    $("#inpur_field").val("");
  });

  // Add New task on click
  $("#add_task").click(function () {
    var list = $("#taskList");
    if (input_field.val() === "") {
      alert("Please Input your Task");
    } else {
      list.append(
        `<div class="task"><div class="flex-shrink-0"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></div><div class="flex-grow-1 ms-3">` +
          input_field.val() +
          `</div><div class="flex-shrink-0"><button class="remove">X</button></div></div>`
      );

      $(".remove").on("click", function () {
        $(this).parent().parent().remove();
        console.log("working");
      });
      input_field.val("");
    }
  });

  // Delete task which are selected on clicking delete button
  $("#delete_task").on("click", function () {
    $(".form-check-input").each(function () {
      if ($(this).prop("checked") == true) {
        $(this).parent().parent().remove();
      }
    });
  });

  // Select all task
  $("#select_all_task").on("click", function () {
    $(".form-check-input").prop("checked", true);
  });

  // Delete task which are selected on clicking delete key
  $(document).keyup(function (e) {
    const key = event.key;
    if (key === "Delete") {
      $("#delete_task").click();
    }
  });
});
