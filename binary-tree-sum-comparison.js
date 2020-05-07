// given an array representing a binary tree where the parents are first and the children are ordered left to right, then their children from left to right with -1 representing no node, add all nodes on both sides of the tree and return "Left" if the left side is higher, "Right" if the right side is higher, and "" if they are equal or there are no nodes in the tree.

const solution = (arr) => {
  let numChildrenNextRow = 1;
  let leftSum = 0;
  let rightSum = 0;
  debugger;
  for (let i = 1; i < arr.length; i += numChildrenNextRow) {
    numChildrenNextRow *= 2;

    leftSum += sum(arr, i, i + numChildrenNextRow / 2);
    rightSum += sum(arr, i + numChildrenNextRow / 2, i + numChildrenNextRow);
  }

  if (leftSum === rightSum || arr.length === 0) {
    return '';
  }
  return leftSum > rightSum ? 'Left' : 'Right';
};

function sum(arr, startI, endIExclusive) {
  let sum = 0;
  for (let i = startI; i < endIExclusive; i++) {
    let current = arr[i];

    if (typeof current === 'undefined') {
      current = 0;
    }

    if (current !== -1) {
      sum += current;
    }
  }
  return sum;
}

solution([1, 10, 5, 1, 0, 6]);
