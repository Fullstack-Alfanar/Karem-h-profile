// question 1

// var i;
// for (i = 1; i <= 1000; i++) {
//     alert(i);
// }

// _________________________________________________

// question 2

// var i;
// for (i = 1; i <= 1000; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// _________________________________________________

// question 3

// var i;
// for (i = 1000; i <= 2000; i++) {
//     if (i % 2 == 1) {
//         alert(i);
//     }
// }

// _________________________________________________

// question 4

// var i;
// for (i = 1000; i >= 0; i--) {
//     alert(i);
// }

// _________________________________________________

// question 5

// var i;
// for (i = 1000; i >= 0; i--) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// _________________________________________________

// question 6

// var i;
// for (i = 1000; i >= 0; i--) {
//     if (i % 2 == 1) {
//         alert(i);
//     }
// }

// _________________________________________________

// question 7

// var i, n;
// n = +prompt("enter number");
// for (i = 1; i <= n; i++) {
//     if(i%3==0){
//         alert(i);
//     }
// }

// _________________________________________________

// question 8

// var i, n;
// n = +prompt("enter number");
// for (i = 1; i <= n; i++) {
//         alert(i);
// }
// for (i = n; i >= 1; i--) {
//     alert(i);
// }

// _________________________________________________

// question 9

// var i, n,m;
// n = +prompt("enter number1");
// m = +prompt("enter number2");
// for (i = n; i <= m; i++) {
//         alert(i);
// }

// _________________________________________________

// question 10

// var i, n, m;
// n = +prompt("enter number1");
// m = +prompt("enter number2");
// if (n < m) {
//     for (i = n; i <= m; i++) {
//         alert(i);
//     }
// }
//  if (m < n) {
//     for (i = m; i <= n; i++) {
//         alert(i);
//     }
// }

// _________________________________________________

// question 11

// var i, n,m;
// n = +prompt("enter number1");
// m = +prompt("enter number2");
// for (i = m; i >= n; i--) {
//         alert(i);
// }

// _________________________________________________

// question 12

// var i, n, m;
// n = +prompt("enter number1");
// m = +prompt("enter number2");
// if (n < m) {
//     for (i = m; i >= n; i--) {
//         alert(i);
//     }
// }
//  else if (m < n) {
//     for (i = n; i >= m; i--) {
//         alert(i);
//     }
// }

// _________________________________________________

// question 13

// var first, last, num, i;
// first = +prompt("enter first number");
// last = +prompt("enter last number2");
// num = +prompt("enter number");
// for (i = first; i <= last; i++) {
//     if (i % num == 0){
//         alert(i);
//     }
// }

// _________________________________________________

// question 14

// var first, last, num, i;
// first = +prompt("enter first number");
// last = +prompt("enter last number");    
// num = +prompt("enter number");
// if (last > first) {
//     for (i = first; i <= last; i++) {
//         if (i % num == 0) {
//             alert(i);
//         }
//     }
// }
// else if(first>last){
//     for (i = last; i <= first; i++) {
//         if (i % num == 0) {
//             alert(i);
//         }
//     }

// }

// _________________________________________________

// question 15

// var num;
// num = +prompt("enter number");
// while(num!=0){
//     if(num%7==0){
//     alert(num+"mod 7 equel 0");
//     }
//     else{
//         alert(num+" mod 7 not equel 0");
//     }
//     num = +prompt("enter number");
// }
// alert("0 mod 7 equel 0");

// _________________________________________________

// question 16

// var num;
// num = +prompt("enter number");
// while (num != 0) {
//     if (num % 7 == 0) {
//         alert(num + "mod 7 equel 0");
//     }
//     else {
//         alert(num + " mod 7 not equel 0");
//     }
//     num = +prompt("enter number");
// }

// _________________________________________________

// question 17

// var num;
// num = +prompt("enter number");
// while (num >= 0) {
//     alert(Math.pow(num,3));
//     num = +prompt("enter number");
// }
// alert(Math.pow(num,3));

// _________________________________________________

// question 18

// var num;
// num = +prompt("enter number");
// while (num >= 0) {
//     alert(Math.pow(num,3));
//     num = +prompt("enter number");
// }

// _________________________________________________

// question 19

// var i, num, sum = 0, avg = 0;
// alert("enter 100 numbers")
// for (i = 1; i <= 100; i++) {
//     num = +prompt("enter number");
//     sum += num;
// }
// avg = sum / 100;
// alert("the sum is  " + sum);
// alert("the avg is  " + avg);

// _________________________________________________

// question 20

// var i, num, max=0;
// alert("enter 5 numbers")
// for (i = 1; i <= 5; i++) {
//     num = +prompt("enter number");
//     if (num > max) {
//         max = num;
//     }
// }
// alert("the maximum is  " + max);

// _________________________________________________

// question 21

// var num, cnt = 0;
// num = +prompt("enter number");
// while (num >= 0) {
//     if (num % 2 == 0){
//         cnt++;
//     }
//     num = +prompt("enter number");
// }
// alert("there are "+cnt+" zogy numbers");

// _________________________________________________

// ###############################################################################################challege question 22

// var num, d = 0, sum = 0;
// num = +prompt("enter number");
// while (num > 0) {
//     d = num % 10;
//     sum += d;
//     num = Math.floor(num / 10);
// }
// alert("sum of the manazel is  " + sum);

// _________________________________________________

// ###############################################################################################challege question 23

// var num, i;
// num = +prompt("enter number");
// while (num > 0) {
//     for (i = 1; i <= num; i++){
//         alert(i);
//     }
//     num = +prompt("enter number");
// }

// _________________________________________________

// ###############################################################################################challege question 24

// var n, i, j;
// var square = "";
// n = +prompt("enter number");
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n; j++) {
//         square += "*";
//     }
//     square += "<br>";
// }
// document.write(square);

// _________________________________________________

// ###############################################################################################challege question 25

var width, height, i, j;
var square = "";
height = +prompt("enter width");
width = +prompt("enter height");
for (i = 1; i <= width; i++) {
    for (j = 1; j <= height; j++) {
        square += "*";
    }
    square += "<br>";
}
document.write(square);

















