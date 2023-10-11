/**
 * 타입까지 비교방법
 */
var input =0;
var weight=0;
input = Number(prompt("신장을 입력하세요"));
weight = Number(prompt("체중을 입력하세요"));

var height=input/100;
var result = weight/(height*height);


if (result<=18.5) {
	document.write("BMI: ",result,"<br>저체중입니다.", "<br>");
}else if (18.5<=result<=22.9) {
	document.write("BMI: ",result,"<br>정상입니다.", "<br>");
}else if (23.0<=result<=24.9){
	document.write("BMI: ",result,"<br>과체중입니다.", "<br>");
}else{
	document.write("BMI: ",result,"<br>비만입니다.", "<br>");
}






