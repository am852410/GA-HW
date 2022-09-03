$(() => {
  $("#submit").on("click", () => {
    console.log("button clicked");
    const $inputValue = $("#input-box").val();
    const $newToDoItem = $("<div>");
    const $completedButton = $("<button>");
    $completedButton.text("COMPLETED");
    $newToDoItem.append($inputValue);
    $newToDoItem.append($completedButton);
    $completedButton.on("click", () => {
      console.log("button clicked");
      $newToDoItem.css("background-color", "#ED6495");
      const $completedValue = $("#completed");
      $completedValue.append($newToDoItem);
      $removeButton = $completedButton.text("REMOVE");
      $removeButton.on("click", () => {
        console.log("remove button");
        $newToDoItem.remove();
      });
    });
    console.log($newToDoItem);

    $newToDoItem.addClass("to-do-item");
    $("#to-do-list").append($newToDoItem);
  });
});
