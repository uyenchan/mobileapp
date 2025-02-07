'use strict';

// ワークエリア
var wkFirst = "1" //初回FLG
var wkTotal = 0;  //合計
var wkInput = ""; //現在クリックされたボタンの値
var wkCalc = "+"; //初期値 "+"
var wkBefore = "1"; //１つ前の入力 … 0:数値  1:演算子


const elementcalcLog = document.getElementById("calcLog");
const elementResult = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const elementAdd = document.getElementById("add");
const elementSub = document.getElementById("sub");
const elementMult = document.getElementById("mult");
const elementDiv = document.getElementById("div");
const elementEqual = document.getElementById("equal");
const elementCancel = document.getElementById("cancel");


num1.addEventListener("click", function () { edit(1) });
num2.addEventListener("click", function () { edit(2) });
num3.addEventListener("click", function () { edit(3) });
num4.addEventListener("click", function () { edit(4) });
num5.addEventListener("click", function () { edit(5) });
num6.addEventListener("click", function () { edit(6) });
num7.addEventListener("click", function () { edit(7) });
num8.addEventListener("click", function () { edit(8) });
num9.addEventListener("click", function () { edit(9) });
num0.addEventListener("click", function () { edit(0) });

elementAdd.addEventListener("click", function () { update("+") });
elementSub.addEventListener("click", function () { update("-") });
elementMult.addEventListener("click", function () { update("*") });
elementDiv.addEventListener("click", function () { update("/") });

elementEqual.addEventListener("click", dspResult);
elementCancel.addEventListener("click", clear);


function edit(wkInput) {
  if (wkBefore === "0") {
    elementResult.innerHTML = Number(elementResult.innerHTML + wkInput);
  }
  else {
    elementResult.innerHTML = wkInput;
  }
  wkFirst = "0";
  wkBefore = "0";
}

function update(calcType) {
  if (wkBefore === "0") {
    elementcalcLog.innerHTML = elementcalcLog.innerHTML + Number(elementResult.innerHTML) + calcType;
    calculator();
  }
  else {
    if (wkFirst === "1") {
      elementcalcLog.innerHTML = "0" + calcType;
    }
    else {
      let wkLogLastWord = elementcalcLog.innerHTML.slice(-1);
      if (["+", "-", "*", "/"].includes(wkLogLastWord)) {
        elementcalcLog.innerHTML = elementcalcLog.innerHTML.slice(0, -1) + calcType;
      }
      else {
        elementcalcLog.innerHTML = elementcalcLog.innerHTML + calcType;
      }
    }
  }
  wkCalc = calcType;
  wkBefore = "1";
}

function dspResult() {
  if (wkFirst === "0" && wkBefore === "0") {
    elementcalcLog.innerHTML = elementcalcLog.innerHTML + Number(elementResult.innerHTML) + calcType;
    const logArea = document.getElementById("calcLog");
    const resultArea = document.getElementById("result");
    const logText = logArea.innerHTML + resultArea.innerHTML;
    const resultValue = parseFloat(resultArea.innerHTML);
    logArea.innerHTML = logText;
    calculator();

    wkCalc = "=";
    wkBefore = "1";
   
  }

}

function clear() {
  const logArea = document.getElementById("calcLog");
  const resultArea = document.getElementById("result");
  resultArea.innerHTML = "0";
  logArea.innerHTML = "";

  wkFirst = "1";
  wkTotal = 0;
  wkCalc = "+";
  wkBefore = "1";
}

function calculator() {
  const resultArea = document.getElementById("result");
  const resultValue = parseFloat(resultArea.innerHTML);
  switch (wkCalc) {
    case "+":
      wkTotal = wkTotal + resultValue ;
      break;
    case "-":
      wkTotal = wkTotal - resultValue ;
      break;
    case "*":
      wkTotal = wkTotal * resultValue ;
      break;
    case "/":
      wkTotal = wkTotal / resultValue ;
      break;
    default:
      break;
  }
  resultArea.innerHTML = wkTotal;
}






























/** 数字がクリックされたときの処理 */
function edit(wkInput) {
  // １つ前の入力が数値
  if (wkBefore === "0") {
    elementResult.innerHTML = Number(elementResult.innerHTML + wkInput); //入力値の結合（ゼロサプレスして結合）
  }
  // １つ前の入力が、演算子
  else {
    elementResult.innerHTML = wkInput;
  }
  wkFirst = "0" //初回FLG off
  wkBefore = "0"
}

/** 演算子がクリックされたときの処理 */
function update(calcType) {
  // １つ前の入力が数値
  if (wkBefore === "0") {
    elementcalcLog.innerHTML = elementcalcLog.innerHTML + Number(elementResult.innerHTML) + calcType; //計算ログ
    // 【Ｃ】自分で考える
  }
  // １つ前の入力が演算子（演算子 入力しなおし）
  else {
    // 初回入力
    if (wkFirst === "1") {
      elementcalcLog.innerHTML = "0" + calcType; //計算ログ
    }
    else {
      // 演算子 入力しなおし
      let wkLogLastWord = elementcalcLog.innerHTML.slice(-1); //ログ最後の１文字
      if (["+", "-", "*", "/"].includes(wkLogLastWord)) {
        elementcalcLog.innerHTML = elementcalcLog.innerHTML.slice(0, -1) + calcType; //計算ログ　末尾1文字（前回の演算子）を削除
      }
      // イコールの後の演算子
      else {
        elementcalcLog.innerHTML = elementcalcLog.innerHTML + calcType; //計算ログ
      }
    }
  }
  wkCalc = calcType;  //演算子save
  wkBefore = "1";
}

/** =がクリックされたときの処理 */
// 【Ｄ】自分で考える









/** 計算結果をクリアします。(clear Result) */
// 【Ｅ】自分で考える








// 計算
// 【Ｆ】自分で考える