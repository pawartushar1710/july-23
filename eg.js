

// function FindMaxAndMIn(arr){
     
//     let Min = arr[0];
//     let Max = arr[0];

//     for(let i=0; i<=arr.length; i++){
//   if(arr[i]<Min){
//     Min = arr[i];
//   }if(arr[i]>Max){
//     Max = arr[i];
//   }
//     }

//    return{Min,Max}

// };

// console.log(FindMaxAndMIn([3,2,4,4,55,21,4]));
// console.log(FindMaxAndMIn([3,244,4444,466,554,2441,465]));

//let arr = [1,2,3,4,5,6,7];
//let arr = ["tushar","pawar",17]
//let newarr = arr.reverse();

//console.log(newarr);

function reverse(arr){

    let newarr = [];
    let j=0;
    for(let i=arr.length-1; i>=0; i--){
     newarr[j]=arr[i]
     j++;
    }
console.log(newarr)
};
                                                                                                                                                                                                                                                                  
reverse([1,2,3,4,5,6,7,8,9,10]);
