//MacOS, node.js v12.13.0 환경에서 코딩했습니다.

const getNumber = (A, B, K) => {
  let aArray = [];
  let bArray = [];
  for (let i = 1; i < K; i++) {
    aArray.push(i * A);
    bArray.push(i * B);
  }
  let cArray = aArray.concat(bArray);
  cArray = cArray
    .filter((v, i) => cArray.indexOf(v) === i)
    .sort((a, b) => a - b);
  console.log(cArray);
  return cArray[K - 1];
};

// 이렇게 실행할 경우 K회 연산을 처리합니다.
// A와 B에 i를 곱한 값을 추가해주므로 둘의 배수가 아닌 불필요한 수까지 체크하지 않아도 되어 반복문이 더 빠르게 진행됩니다.

console.log(getNumber(6, 8, 80000));
