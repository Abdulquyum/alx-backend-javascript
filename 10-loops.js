export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (let idx of array) {
        newArray.push(appendString + idx);
    }

    return newArray;
}

// export default function appendToEachArrayValue(array, appendString) {
//     for (var idx in array) {
//       var value = array[idx];
//       array[idx] = appendString + value;
//     }
  
//     return array;
//   }
