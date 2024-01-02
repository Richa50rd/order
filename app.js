const ascendingOrder = [];
const descendingOrder = [];

const upper = function (ascendingOrder) {
  return ascendingOrder.sort((a, b) => {
    return a - b;
  });
};
function lower(descendingOrder) {
  return descendingOrder.sort((a, b) => {
    return b - a;
  });
}

console.log(upper([2, 4, 5, 8, 9, 3, 6, 0]));
console.log(lower([2, 4, 5, 8, 9, 3, 6, 0]));
