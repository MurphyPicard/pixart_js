let $setColorButton = $(setColor);
let $inputColorField = $(colorField);
let $brushBox = $('.brush');

$setColorButton.on("click", function(){
  $brushBox.css("background-color", $inputColorField.val());
  // event.preventDefault();
  return false;
});
