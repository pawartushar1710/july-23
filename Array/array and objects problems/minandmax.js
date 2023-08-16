

// finding min and max frome array 

// function MinMax(arr){

//     let min = arr[0];
//     let max = arr[0];
    
//     for(let i = 1; i<=arr.length; i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }

//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return{min , max}
// }

// console.log(MinMax([3,1,2,4,55,6]));

// finding min and max frome array 
// assign first two elements of array as min and max
// iterate through and compair min and max

function minandmax(array){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min=array[i];
        }
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log("min :"+min);
    console.log("max :"+max)
};

minandmax([3,2,5,6]);