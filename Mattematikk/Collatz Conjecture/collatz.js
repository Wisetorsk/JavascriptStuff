
function collatz(n) {
    /*
    The collatz conjecture uses the following rules:
        if the given number is even, return itself divided by 2
        if the given number is odd, return itself multiplied by 3 and add 1
    Continue iteratively throug the emerging number sequence from a given starting integer value > 0
    */
    return (n%2 == 0) ? n/2 : 3*n + 1; 
}

function generate(n, start=10) {
    var lis = [collatz(start)];
    for (let i in [...Array(n).keys()]) {
        var current = lis[lis.length-1];
        var newNumber = collatz(current);
        lis.push(newNumber);
    }
    return lis;
}
generate(100, 1);