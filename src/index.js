//가계부 프로그램 만들기
//하루에 쓴 돈을 적어서 매일 기록하는 방식
// + 쓴 내역을 분류하여 낭비를 강조하는 기능
// + 자동으로 사용내역을 감지하여 낭비를 줄이는 기능

//가계부 기록 하기
//가계부 기록 창 만들기

//탐색인자 설정
const billForm = document.querySelector(".writeMoney"),
  billInput = billForm.querySelector("input"),
  billList = document.querySelector(".weeklyBill");

const BILL_LS = "bill";
let bill = [];

function recordUse() {
  const date = new Date();
  const dayNum = date.getDay();
  if (dayNum === 0) {
    let string = document.querySelector("#0").innerHTML();
    let replacedString = stri;
  }
}

//실행 함수
function init() {
  //기록 기능 함수
  recordUse();
}

init();
