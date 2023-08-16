

// removing duplicate
// [1,2,2,3,4,4,5] .output..> [1,2,3,4,5]

function removeDuplicates(arr) {
    let newarr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
  
      for (let j = 0; j < newarr.length; j++) {
        if (arr[i] === newarr[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        newarr.push(arr[i]);
      }
    }
  
    console.log(newarr);
  }
  
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  