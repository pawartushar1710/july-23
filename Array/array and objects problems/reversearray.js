

// reverse an array using loops

function ReverseArray(array){

    let result = [];
    let j=0;
    for(let i=array.length-1; i>=0; i--){
        result[j]=array[i];
        j++;
    };
    console.log(result);
}

ReverseArray([5,4,3,2,1]);