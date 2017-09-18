// Exercise 1
    // Your code here.
    function min (x, y) {
      if ( x > y)
        return y;
      else
        return x;
    }
    
    console.log(min(0, 10));
    // → 0
    console.log(min(0, -10));
    // → -10

// Exercise 2
    // Your code here.
    function isEven (num){
        if (num == 1)
            return false;
        else if (num == 0)
            return true;
        else if (num < 0)
            return isEven(-num);
    	else
    		return isEven(num-2);
    }
    
    console.log(isEven(50));
    // → true
    console.log(isEven(75));
    // → false
    console.log(isEven(-1));
    // → ?? Maximum call stack size exceeded

// Exercise 3
    // Your code here. Count B characters
    function countBs (str){
    	var numBs = 0;
        for (var i = 0; i < str.length; i++){
            if (str.charAt(i) === 'B')
                numBs++;
        }
    	return numBs;
    }
    // Count any character acccording to chosen char by user
    function countChar (str, letter){
        var numLetter = 0;
        for (var i = 0; i < str.length; i++){
    		if (str.charAt(i) === letter)
    			numLetter++;
        }
    	return numLetter;
    }
    
    console.log(countBs("BBC"));
    // → 2
    console.log(countChar("kakkerlak", "k"));
    // → 4