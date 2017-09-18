// exercise 1
    var hash = "";
    for (var i =0; i < 7; i++){
    	hash += "#";
    	console.log(hash);
    }

// exercise 2

    for (var i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0)
            console.log("FizzBuzz");
        else if (i % 5 === 0)
            console.log("Buzz");
        else if (i % 3 === 0)
            console.log("Fizz"); 
        else
            console.log(i);
    }

// exercise 3 
    
    var size = 8;
    var board = "";
    for (var i = 0; i < size; i++){
        for (var j = 0; j < size; j++){
            if ((i + j) % 2 == 0)
                board += " ";
            else 
                board += "#";
        }
        board += "\n";
    }
    console.log(board);

