// 7 - Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 

function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0
  let a = collection.reduce((a,b) => {
    a[b] = a[b]+1 || 1
    return a
  }, {})
  return Math.max(...Object.values(a))
}