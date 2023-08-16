

function Isprime(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<=num; i++){
        if(num%i===0){
            return false
        }
        else{
            return true;
        }
    }
}

function SumOfPrimes(n){
    let sum = 0;
    for (let i=1; i<=n; i++){
        if(Isprime[i])
        sum+=i;
    }
    console.log(sum);
};

SumOfPrimes(10);
