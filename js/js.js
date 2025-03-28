document.addEventListener("DOMContentLoaded", () => {

let isDragging = false;
  let activeElement = null;
  let startX = 0, startY = 0;

  document.querySelectorAll(".dragg").forEach((img) => {

    img.ondragstart = () => false;

    img.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
      activeElement = img;

      startX = e.clientX - activeElement.offsetLeft;
      startY = e.clientY - activeElement.offsetTop;

      activeElement.style.position = "absolute";
      activeElement.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging && activeElement) {
        activeElement.style.left = e.clientX - startX + "px";
        activeElement.style.top = e.clientY - startY + "px";
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      activeElement = null;
    });
  });



  
});


