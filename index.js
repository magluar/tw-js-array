// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var c = Array.isArray(a);
var d = Array.isArray(b);
console.log(typeof(a));
console.log(typeof(b));
console.log(c);
console.log(d);

// var a = '[a, b, c, d]'; is a string. by using Array.isArray, it returns false.
// var b = [1, 2, 3, 4]; is object. array is just a regular object. so var b can be seen as an array. by also using Array.isArray, it returns true.


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++){
    a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = colors.join(' ');
var case2 = colors.join('+');
var case3 = colors.join();

console.log(case1);
console.log(case2);
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

console.log(a.sort(function(a, b) {return b-a}));

for (var i = 0; i < a.length; i++){
    for (var x = 0; x < a.length; x++){
        if (a[i] > a[x]){
            var swap1 = a[i];
            var swap2 = a[x];
            a[i] = swap2;
            a[x] = swap1;
        }
    }
}
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var storage = {};
var repeatedElement;
var highest = 0;
for (var i = 0; i < a.length; i++){
    var current = a[i];
    if (a[i] in storage){
        storage[current] = storage[current] + 1;
    }
    else {
        storage[current] = 1;
    }

    if(storage[current] > highest){
        highest = storage[current];
        repeatedElement = current;
    }
}

console.log(repeatedElement);