function setTheme(theme) {
    const body = document.body;

    if (theme === 'dark') {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else if (theme === 'light') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
    
  }

  // document.addEventListener('DOMContentLoaded', function() {
  //   const colorPicker = document.getElementById('colorPicker');
  //   const sizeSlider = document.getElementById('sizeSlider');
  //   const canvas = document.getElementById('drawingCanvas');
  //   const context = canvas.getContext('2d');
  
  //   let isDrawing = false;
   
  
  
  
  
  //   colorPicker.addEventListener('input', function() {
  //       context.strokeStyle = colorPicker.value;
  //   });
  
  //   sizeSlider.addEventListener('input', function() {
  //       context.lineWidth = sizeSlider.value;
  //   });
  
  //   canvas.addEventListener('mousedown', function(event) {
  //       isDrawing = true;
  //       context.beginPath();
  //       context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  //   });
  
  //   canvas.addEventListener('mousemove', function(event) {
  //       if (isDrawing) {
  //           context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  //           context.stroke();
  //       }
  //   });
  
  //   canvas.addEventListener('mouseup', function() {
  //       isDrawing = false;
  //   });
  
  //   canvas.addEventListener('mouseout', function() {
  //       isDrawing = false;
  //   });
  // });
  


     

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var isDrawing = false;
  var isErasing = false;
  var colorPicker = document.getElementById('colorPicker');
  var sizePicker = document.getElementById('sizePicker');

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', endDraw);
  canvas.addEventListener('mouseleave', endDraw);

  function startDraw(e) {
      isDrawing = true;
      if (isErasing) {
          ctx.clearRect(e.offsetX - sizePicker.value / 2, e.offsetY - sizePicker.value / 2, sizePicker.value, sizePicker.value);
      } else {
          ctx.beginPath();
          ctx.moveTo(e.offsetX, e.offsetY);
      }
  }

  function draw(e) {
      if (isDrawing) {
          if (isErasing) {
              ctx.clearRect(e.offsetX - sizePicker.value / 2, e.offsetY - sizePicker.value / 2, sizePicker.value, sizePicker.value);
          } else {
              ctx.lineTo(e.offsetX, e.offsetY);
              ctx.strokeStyle = colorPicker.value;
              ctx.lineWidth = sizePicker.value;
              ctx.stroke();
          }
      }
  }

  function endDraw() {
      isDrawing = false;
  }

  function usePen() {
      isErasing = false;
  }

  function useEraser() {
      isErasing = true;
  }

  colorPicker.addEventListener('input', function() {
      ctx.strokeStyle = colorPicker.value;
  });

  sizePicker.addEventListener('input', function() {
      ctx.lineWidth = sizePicker.value;
  });

     








  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var textInput = document.getElementById('textInput');

  textInput.addEventListener('input', function() {
      var text = this.value;
      drawText(text);
  });

  function insertEmoji(emoji) {
      textInput.value += emoji;
      drawText(textInput.value);
  }

  function drawText(text) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '20px Arial';
      ctx.fillText(text, 20, 40);
  }




  document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('myTextarea');
    const fontStyleSelect = document.getElementById('fontStyle');
    const fontColorInput = document.getElementById('fontColor');
    
    textarea.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const cursorPosition = this.selectionStart;
            const currentValue = this.value;
            const newValue = currentValue.slice(0, cursorPosition) + '\n' + currentValue.slice(cursorPosition);
            this.value = newValue;
            this.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
    });
    
    fontStyleSelect.addEventListener('change', function() {
        textarea.style.fontFamily = this.value;
    });
    
    fontColorInput.addEventListener('input', function() {
        textarea.style.color = this.value;
    });
});




  







  document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('myTextarea');
    const fontStyleSelect = document.getElementById('fontStyle');
    const fontColorInput = document.getElementById('fontColor');
    
    textarea.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const cursorPosition = this.selectionStart;
            const currentValue = this.value;
            const newValue = currentValue.slice(0, cursorPosition) + '\n' + currentValue.slice(cursorPosition);
            this.value = newValue;
            this.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
    });
    
    fontStyleSelect.addEventListener('change', function() {
        textarea.style.fontFamily = this.value;
    });
    
    fontColorInput.addEventListener('input', function() {
        textarea.style.color = this.value;
    });
});