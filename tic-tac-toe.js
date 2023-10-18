
document.addEventListener('DOMContentLoaded', function () {  
   
    // Select the "board" element using querySelector
    var boardElement = document.querySelector('#board');
    // Get the children of the "board" element
    var boardChildren = boardElement.children;

    // Iterate over each child and add the "square" class
    Array.from(boardChildren).forEach(function(child) {
        child.classList.add('square');});
    });
  

 

 