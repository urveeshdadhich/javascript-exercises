const reverseString = function(word) {
    let reverse = ""; 
    let pieces = [];
    pieces = word.split("");
    for(let i=pieces.length-1; i>=0; i--){
    reverse += pieces[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
