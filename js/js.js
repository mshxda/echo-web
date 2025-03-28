document.addEventListener("DOMContentLoaded", function () {
    let draggableElements = document.querySelectorAll(".send-1");
  
    draggableElements.forEach(function (element) {
      let isDragging = false;  
      let offsetX, offsetY;    
      element.addEventListener("mousedown", function (event) {
        isDragging = true;    
  
        offsetX = event.clientX - element.getBoundingClientRect().left;
       
        offsetY = event.clientY - element.getBoundingClientRect().top;
       
        function onMouseMove(event) {
          if (isDragging) {
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
  
            element.style.left = x + "px";
            element.style.top = y + "px";
          }
        }
  
        function onMouseUp() {
          isDragging = false; 
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }
  
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    });
  }); 
