// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// }

// function chunk(array, size) {
//   //declaring variable 'chunked' as an empty array
//   const chunked = []

//   //looping through the array until it has been entirely "manipulated" or split into our subarrays
//   while(array.length > 0) {
//     //taking the spliced segments completely out of our original array
//     //pushing these subarrays into our new "chunked" array
//     chunked.push(array.splice(0, size))
//   }
//   //returning the new array of subarrays
//   return chunked ;
// }

function chunk(array, size) {
  //   //declaring variable 'chunked' as an empty array
    const chunked = [];
  
  //   //looping through the array until it has been entirely "manipulated" or split into our subarrays
    while(array.length>0) {
  //     //taking the spliced segments completely out of our original array
  //     //pushing these subarrays into our new "chunked" array
      chunked.push(array.splice(0, size))
    }
  //   //returning the new array of subarrays
    return chunked ;
  }
  


// function chunk(array, size) {
//     const chunked = []
//     for (var i = 0; i < array.length; i += size) {
//      chunked.push(array.slice(i, i + size))
//     }
//     return chunked;
//   }
  

// function chunk(array, size) {
//   const chunked=[];
//   for(let element of array){
//     const last=chunked[chunked.length-1];
//     if(!last || last.length===size){
//       chunked.push([element]);
//     }
//     else{
//       last.push(element);
//     }
//   }
//   return chunked;
// }

module.exports = chunk;
