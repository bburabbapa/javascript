/**
 * 
 */
//2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하라
// prompt("숫자를입력하세요.","0");

var input1 = Number(prompt("첫 번째 숫자를 입력하세요:"));
var input2 = Number(prompt("두 번째 숫자를 입력하세요:"));
document.write("<h1>국어점수: "+input1+"</h1>");
document.write("<h1>영어점수: "+input2+"</h1>");
document.write("<h1>수학점수: "+(input1+input2)+"</h1>");
document.write("<h1>수학점수: "+(input1-input2)+"</h1>");
document.write("<h1>수학점수: "+(input*+input2)+"</h1>");
document.write("<h1>수학점수: "+(input1/input2)+"</h1>");
