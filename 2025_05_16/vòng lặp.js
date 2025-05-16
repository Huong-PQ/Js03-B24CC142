// for (var a=1 ; a<=8 ; a++){
//     document.writeln("Ngày mới tốt lành! <br>")
// }

// b = parseInt(prompt("Nhập số b:"));

// while (b <= 8){
//     document.writeln(b)
//     document.writeln("Chúc 1 ngày zui zẻ <br>");
//     b++;
// }



// Vòng for
var cst=0
for ( var i = 1 ; i<=100 ; i++){
    cst= i+cst   
}
document.writeln("Tổng dùng for là:",cst,"<br>")


// Vòng while
var s = 0;
var c = 1
while (c<=100){
    s=s+c
    c++
}
document.writeln("Tổng dùng while là:",s)


// vòng do while
var t= 1;
var c3=0;
do{
    c3+=t;
    t++; 
} while (t<=100)
document.writeln("Tổng dùng do while là:",c3)