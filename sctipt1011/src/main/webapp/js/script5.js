/**
 * 
 */
var input1 = Number(prompt("첫번째 숫자를 입력하세요","숫자입력"));
var input2 = Number(prompt("두번째 숫자를 입력하세요","숫자입력"));
var sum=0;
for(var i=input1;i<input2;i++){
	sum=sum+i; //sum+=i;	
}
document.write( input1+"부터"+input2+"까지의합: "+sum,"<br>");