//MacOS, node.js v12.13.0 환경에서 코딩했습니다.

const getNumber = (A, B, K) => {
  let S = [];
  // A, B의 배수 집합의 합집합 원소를 넣어줄 S를 빈 배열로 선언합니다.
  let i = 1;
  // 현재 자연수를 기록하는 변수입니다. 반복할때마다 1씩 증가시켜 1부터 순서대로 자연수를 탐색하도록 합니다.
  while (true) {
    if (i % A === 0 || i % B === 0) {
      S.push(i);
      if (S.length === K) {
        break;
      }
      // 만약 현재 수 i가 A로 나뉘어지거나 B로 나뉘어질 경우, A 혹은 B의 배수이기 때문에 S에 추가해줍니다.
      // S 배열의 길이가 K가 되었을 때 반복문을 종료합니다.
    }
    i++;
  }

  return S[K - 1];
  // 반복문이 종료되면, S 배열의 K-1번째 수를 리턴합니다.
};

console.log(getNumber(6, 8, 80000));
