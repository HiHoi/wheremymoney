//가계부 프로그램 만들기
//하루에 쓴 돈을 적어서 매일 기록하는 방식
// + 쓴 내역을 분류하여 낭비를 강조하는 기능
// + 자동으로 사용내역을 감지하여 낭비를 줄이는 기능

//오늘 쓴 돈 입력
const writeMoney = document.getElementById("writeMoney");
const writeMoneyInput = document.createElement("input");
writeMoneyInput.setAttribute("id", "dailyMoney");
writeMoney.appendChild(writeMoneyInput);
//버튼
const btn = document.getElementById("btn");
const createBtn = document.createElement("button");
const textBtn = document.createTextNode("입력");

createBtn.appendChild(textBtn);
btn.appendChild(createBtn);

//가계부
//오늘 날짜 탐색
const date = new Date();
const today = date.getDay();

//캘린더 생성
const tablePlace = document.getElementById("recordMoney");
const createTr = document.createElement("tr");
tablePlace.appendChild(createTr);

for (let i = 0; i < 7; i++) {
  const createTd = document.createElement("td");
  const emptySpace = document.createTextNode("br");
  createTd.setAttribute("id", "dayNum");
  createTd.setAttribute("day", i);
  createTd.appendChild(emptySpace);
  createTr.appendChild(createTd);
}
//버튼기능 추가
createBtn.onclick = function() {
  for (var i = 0; i < 7; i++) {
    const inputNum = document.getElementById('dailyMoney')
    const td = document.querySelectorAll("td");
    let dayNum = td[i].getAttribute('day');
    
  }
};
//기록된 거 지우기
function deleteInner(event) {
  const btn = event.target;
}

//오늘 날짜에 맞게 일주일 가계부에 출력하기
function recordWeekly() {
  //input 값 입력받고 출력하기
  const inputMoney = document.querySelector("#dailyMoney");
  //지우기 버튼
  //const delBtn = document.createElement("button");
  //delBtn.innerHTML = "X";
  //delBtn.addEventListener("click", deleteInner);
  //탐색한 날짜에 맞게 테이블 안에 값 넣기(더 깔끔한 표현법 알아보기)
  //tr의 속성값
  const trAttr = writeMoney.querySelector("tr");
  if (today === trAttr.id) {
    trAttr.innerHTML = inputMoney.value;
  }
}

//입력한 값 저장 형태
const MYBILLS = "mybills";
let mybills = new Array();

//로컬스토리지에 저장
function saveBills() {
  localStorage.setItem(MYBILLS, JSON.stringify(mybills));
}
//저장된 개체에 대한 속성 부여
function createBills() {
  //input 값 입력받고 출력하기
  let inputMoney = document.querySelector("#dailyMoney").value;
  //하루동안 쓴 돈 저장하기
  let TODAYMONEY = {
    day: today,
    money: inputMoney
  };
  mybills.push(TODAYMONEY);
  saveBills();
}
//저장한 값 불러오기
function loadBill() {
  //문자열 리스트를 다시 리스트로 변경
  const loadSavedBill = localStorage.getItem(MYBILLS);
  const parsedBill = JSON.parse(loadSavedBill);
  let load_day = parsedBill[0].day;
  let load_money = parsedBill[0].money;

  if (load_day == Sun.id) {
    document.getElementById(0).innerHTML = load_money;
  } else if (load_day == Mon.id) {
    document.getElementById(1).innerHTML = load_money;
  } else if (load_day == Tue.id) {
    document.getElementById(2).innerHTML = load_money;
  } else if (load_day == Wed.id) {
    document.getElementById(3).innerHTML = load_money;
  } else if (load_day == Thu.id) {
    document.getElementById(4).innerHTML = load_money;
  } else if (load_day == Fri.id) {
    document.getElementById(5).innerHTML = load_money;
  } else if (load_day == Sat.id) {
    document.getElementById(6).innerHTML = load_money;
  }
}
//같은 날 갱신하는 거 방지(보류)

function init() {
  recordWeekly();
}
