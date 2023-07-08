//let a = 8
//for (let i = 0; i < 4; i++) {
//    a = a + 2
//}
//console.log(a);


//let b = 2 
//for (let i = 0; i < 5; i++) {   
//    b = b * 2
//}
//console.log(b);

//let b = 2
//for (let i = 0; i < 10; i++) {
   //b = b + 4
//}
//console.log(b);
//2+4 = 6
//6+4 = 10
//10+4 = 12
//12+4 = 16
//16+4 = 20
//20+4 = 24
//24+4 = 28
//28+4 = 32
//32+4 = 36
//36+4 = 40



var sheep = +prompt("Qo'yni sonini kiriting")
while (isNaN(sheep) || sheep == 0) {
    sheep = +prompt("Xato Iltimos qaytadan urinib son kiriting")
}

let sum = " ta qo'y"
for (let i = 1; i <= sheep; i++) {
    sum = i + sum
    console.log(sum);
    sum = " ta qo'y"
}