//MacOS, node.js v12.13.0 환경에서 코딩했습니다.

const getNumber = (A, B, K) => {
  let S = [];
  let i = 1;
  while (true) {
    if (i % A === 0 || i % B === 0) {
      S.push(i);
      if (S.length === K) {
        break;
      }
    }
    i++;
  }

  return S[K - 1];
};

//자연수를 1씩 증가시키는 반복문을 돌려, 해당하는 자연수가 A의 배수거나 B의 배수일 경우, 해당 수를 S 배열에 넣어주었습니다.
//만약 S 배열의 길이가 K가 됐을 경우, 반복문을 빠져나가고 S배열의 K-1번째 원소를 리턴합니다.

//이렇게 진행할 경우, 자연수 1부터 1씩 증가시켜 모든 수를 체크하기 때문에
//S[K-1]에 해당하는 횟수만큼 연산을 처리하게 됩니다.

console.log(getNumber(6, 8, 8)); // 테스트는 이곳에서 부탁드립니다.
