function split(arr) {
  if (arr.length === 1){
    return [arr]
  } else {
    let spliced = arr.splice(arr.length / 2)
    return split(arr).concat(split(spliced))
  }
}
