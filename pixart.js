let $setColorButton = $(setColor);
let $inputColorField = $(colorField);
let $brushBox = $('.brush');

//commit 1
$setColorButton.on("click", function(){
  $brushBox.css("background-color", $inputColorField.val());
  // event.preventDefault();
  return false;
});

//commit 2
$setColorButton.on("enter", function(){
  $brushBox.css("background-color", $inputColorField.val());
  // event.preventDefault();
  return false;
});

//commit 3
for (let i = 0; i<20; i++){
$("body").append('<div class="square"></div>');
}
