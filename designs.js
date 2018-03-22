$(document).ready(function() {
 
    // Select color input
  const colorPicker = $('#colorPicker');
  
  // Select size input
  const sizePicker = $('#sizePicker');
  
  // When size is submitted by the user, call makeGrid()
  const pixelCanvas = $('#pixelCanvas');
  
  // size of grid height and width
  const inputHeight = $('#inputHeight');
  const inputWidth = $('#inputWidth');
 
  // event listener for user clicks
  sizePicker.submit(function() {
    event.preventDefault();
    
    //stops page from refreshing
    pixelCanvas.children().remove();
   
    //reset makeGrid
    let height = inputHeight.val();
    let width = inputWidth.val();
    makeGrid(height, width);
  });
  
  // function to make grid
  function makeGrid(height, width) {
    for (let h = 1; h <= height; h++) {
      pixelCanvas.append('<tr></tr>');
      for (let w = 1; w <= width; w++) {
        $('tr').last().append('<td></td>');
      }
    }
  }
  
  //event listener to add color to cells
  pixelCanvas.on('click', 'td', function() {
    let colorChoice = colorPicker.val();
    $(this).css('background-color', colorChoice);
  });
  
  //double click removes user color from cell
  pixelCanvas.on('dblclick', 'td', function() {
    $(this).css('background-color', 'transparent');
  });

  //mouse click drag color function
  pixelCanvas.on('mousedown mouseover', 'td', function() {
    if(event.buttons===1){
      let colorChoice = colorPicker.val();
      $(this).css('background-color', colorChoice);
    }
  });
});