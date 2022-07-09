var arr = [1,4,3,6,33,8];
console.log(arr.sort());

var arry = [1,3,22,45,77,3636];
arry.sort(function(x,y) {
    return x-y;
});
console.log(arry);

arry.sort(function(x,y) {
    return y-x;
})
console.log(arry);

var arr2=[0.001, 0.324, 0.218, 0.889, 0.101];
arr2.sort(function(x,y) {
    return x-y;
})
console.log(arr2);


var prices = [11,12,13,19,33];
console.log(Math.max(...prices));