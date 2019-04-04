function bubbleSort(arr) {
  let smallest = null;
  for (let i=0; i<arr.length-1; i++){
    for (let j=i+1; j<arr.length-1; j++){
      if (arr[j] < smallest) {
        smallest = arr[j]
      }
    }
  }
}

