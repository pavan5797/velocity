// Function Declaration syntax
function sum(x,y) {
    var result = x + y ;
    return result;
}

var result = sum(12 , 15);
console.log("result is " + result);

// Function expression Sytax (more like variable declaration and assignment)
var sum2 = function(x,y) {
    return x+y;
};

console.log(sum2(13,14));


// Function details
// unlike normal coding languges javascript functions work independent of arguments passing through the function

function foo() {
    console.log('foo is printed');
    console.log(arguments);    //arguments is used to see how many arguments are passing
}

foo(); 
foo('hello');
foo('hello' ,'world');


// function using arguments

function sumAll() {
    for(var i=0, result =0; i<arguments.length; i++) {
        result = result+ arguments[i];
    }
    return result;
}

console.log(12,14);
console.log(12,14,11,3,5,6);
console.log(12,14,1,3,5,77,88);
