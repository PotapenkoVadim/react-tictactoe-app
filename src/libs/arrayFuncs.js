export function diffArrays (A,B) {
  let M = A.length, N = B.length, c = 0, C = [];
  for (let i = 0; i < M; i++) {
    let j = 0, k = 0;
    while (B[j] !== A[ i ] && j < N) j++;
    while (C[k] !== A[ i ] && k < c) k++;
    if (j === N && k === c) C[c++] = A[ i ];
  }
  return C;
}

export function intersecArrays(A,B) {
  let m = A.length, n = B.length, c = 0, C = [];
  for (let i = 0; i < m; i++) {
    let j = 0, k = 0;
    while (B[j] !== A[ i ] && j < n) j++;
    while (C[k] !== A[ i ] && k < c) k++;
    if (j !== n && k === c) C[c++] = A[ i ];
  }
  return C;
}