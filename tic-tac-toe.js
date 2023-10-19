
document.addEventListener('DOMContentLoaded', function () {  
    var switch_ = 0; // used to alternate X and O
    var state_ = [-1,-1,-1,-1,-1,-1,-1,-1,-1]; // keeps track of the state of the game 
   
    // Select the "board" element using querySelector
    var boardElement = document.querySelector('#board');
    // Get the children of the "board" element
    var boardChildren = boardElement.children;

    // Iterate over each child and add the "square" class
    Array.from(boardChildren).forEach(function(child) {
        child.classList.add('square');

        // adding and event listener to each div child
        child.addEventListener('click', function() {
            var index = Array.from(boardChildren).indexOf(child);
              if (switch_ == 0) {
                  child.classList.add('O');
                  let myText = document.createTextNode("O");
                  child.append(myText);
                  switch_= 1;
                  state_[index] = 0;
                  //child.style.backgroundColor = 'yellow';
              } else{
                  child.classList.add('X');
                  let myText = document.createTextNode("X");
                  child.append(myText);
                  switch_ = 0;
                  state_[index] = 1 ;
              }
              
              
              
              
          });
    });

        

});
  

 

 