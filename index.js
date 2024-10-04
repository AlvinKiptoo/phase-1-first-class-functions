function receivesAFunction(callback) {
    callback();
}

function spy() {
    console.log("I am Hungry!")
}
receivesAFunction(spy);

function returnsANamedFunction() {

    function namedFunction() {
        console.log("I am full");
    }

    return namedFunction;
}

function returnsAnAnonymousFunction() {
    
     return function() {
        console.log("I am satisfied");
     };
}