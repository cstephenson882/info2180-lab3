// document.addEventListener('DOMContentLoaded', function () {
//    const boardParent = document.querySelector('#board');
//    //var children_of_board = boardParent.children;
//    for (let i = 0; i < boardParent.children.length;i++) {
//     const childElement = boardParent.children[i];
//     childElement.setAttribute('class', 'square');

//    }
// }); 


// on load this event run to load the sqaures


document.addEventListener('DOMContentLoaded', function () {
    

    var switch_ = 0;
    var state_ = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    console.log(Array.from(state_));

    function checkWin(child) {
        var check_ = -1;
        //winning row
        if (state_[0] == state_[1] && state_[1] == state_[2] && state_[2] != -1) {check_= state_[2];}
        else if (state_[3] == state_[4] && state_[4] == state_[5] && state_[5] != -1) {check_= state_[5];}
        else if (state_[6] == state_[7] && state_[7] == state_[8] && state_[8] != -1) {check_= state_[8];}
    
        // winning columns
        else if (state_[0] == state_[3] && state_[3] == state_[6] && state_[6] != -1) {check_= state_[6];}
        else if (state_[1] == state_[4] && state_[4] == state_[7]&& state_[7] != -1) {check_= state_[7];}
        else if (state_[2] == state_[5] && state_[5] == state_[8] && state_[8] != -1) {check_= state_[8];}
    
        // winning diagonal
        else if (state_[0] == state_[4] && state_[4] == state_[8] && state_[8] != -1) {check_= state_[8];}
        else if (state_[2] == state_[4] && state_[4] == state_[6] && state_[6] != -1) {check_= state_[6];}
        else {}

        if (check_ == 0) {
            var status_  = document.querySelector('#status');
            var text_ = document.textContent = "Congratulations! O is the Winner!";
            status_.textContent = text_;
            status_.setAttribute('id','status');
            status_.classList.add('you-won');
            
        }
        else if (check_ == 1) {
            var status_  = document.querySelector('#status');
            var text_ = document.textContent = "Congratulations! X is the Winner!";
            status_.textContent = text_;
            status_.setAttribute('id','status');
            status_.classList.add('you-won');

        }
    
    }

  
   
    // Select the "board" element using querySelector
    var boardElement = document.querySelector('#board');
    // Get the children of the "board" element
    var boardChildren = boardElement.children;

    // Iterate over each child and add the "square" class
    Array.from(boardChildren).forEach(function(child) {
        child.classList.add('square');
        

        child.addEventListener('click', function() {
          var index = Array.from(boardChildren).indexOf(child);
          //console.log(`Square ${index} clicked!`);
            // Your code to handle the click event goes here

            // Add the "O" class only to the clicked square
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
                state_[index] = 1;
            }
            //console.log(Array.from(state_));
            checkWin(child); 
            
            
            
        });

        child.addEventListener('mouseover',function(){
            child.classList.add('hover');
            
        });

        child.addEventListener('mouseout',function(){
            child.classList.remove('hover');
            
        });

        //child.addEventListerner('onclick',checkWin(state_));
       
        
    });

    var newGame_btn = document.querySelector('.btn');
    newGame_btn.addEventListener('click',function(){
        // Select the "board" element using querySelector
        var boardElement = document.querySelector('#board');
        // Get the children of the "board" element
        var boardChildren = boardElement.children;

        Array.from(boardChildren).forEach(function(child){
            child.textContent = "";

        });
        var status_  = document.querySelector('#status');
            status_.textContent = "Move your mouse over a square and click to play an X or an O.";
            status_.classList.remove('you-won');
            state_ = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

        
    });
    
});
  

 

 