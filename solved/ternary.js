

function largest(a,b,c){

    return a>b && a>c ? " +a Islargest ": b>a && b>c ? "+b Is Largest":" +c Is Largest"
};

console.log(largest(3,2,1));
console.log(largest(1,3,2));
console.log(largest(2,1,3));