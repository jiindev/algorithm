//MacOS, node.js v12.13.0 환경에서 코딩했습니다.

const getSuperbNumber = (K) => {
  let num = 1;
  let superbNumbers = [];
  while (true) {
    let numToString = num + "";
    let isSuperb = true;
    for (let i = 1; i < numToString.length; i++) {
      let beforeNum = parseInt(numToString[i - 1], 10);
      let currentNum = parseInt(numToString[i], 10);
      if (Math.abs(beforeNum - currentNum) !== 1) {
        isSuperb = false;
        break;
      }
    }
    if (isSuperb) {
      superbNumbers.push(num);
      if (superbNumbers.length === K) {
        break;
      }
    }
    num++;
  }
  return superbNumbers[K - 1];
};

//자연수를 1씩 증가시키는 반복문을 돌리고, 그 수를 문자화 시킨 뒤 반복문을 다시 돌려 이전값과 현재값을 비교하여 superb한 수인지를 체크합니다.
//그렇지 않을 경우 isSuperb를 false로 하고 for문을 빠져나옵니다.
//isSuperb가 true라면 해당 수를 superbNumbers 배열에 추가합니다.
//superbNumbers 배열의 길이가 K일 경우 while 반복문을 빠져나가 superbNumbers 배열의 K-1번째 수를 리턴합니다.

//이렇게 진행할 경우, 자연수 1부터 1씩 증가시켜 모든 수를 체크하기 때문에
//(superbNumbers[K-1] * 각 자연수의 길이)에 해당하는 횟수만큼 연산을 처리하게 됩니다.

console.log(getSuperbNumber(100)); // 테스트는 이곳에서 부탁드립니다.
