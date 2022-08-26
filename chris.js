//self invoking functions
/* (function () {
    console.log("hello")
})()

// case 1
var value = 1;

(function () {
    console.log(value)
    value = 2
    console.log(value);
})()

console.log(value)
// output => 1 2 2 Burada let ile yazsak da aynı sonucu alırız. Çünkü tüm value'lar aynı ve önce global alanda tanımlanmış.
 */
// case 2
/* var value = 1;

(function () {
    console.log(value)
    var value = 2
    console.log(value);
})()

console.log(value)

//output => undefined 2 1 . çünkü fonksiyonun içindeki value değişkeni yeni bir değişken ve function scope'unda hosting oluyor ve değeri undefined geliyor. funksiyonun dışındaki ve içindeki value'lar aynı değil artık */

// case 3
/* let value = 1;

(function () {
    console.log(value)
    let value = 2
    console.log(value);
})()

console.log(value) */

// output => Uncaught ReferenceError: Cannot access 'value' before initialization. Reference Error verir çünkü yine fonksiyonun içindeki ve dışındaki value değişkenleri aynı değil ve fonksiyonun içindeki value değişkeni hosting oluyor ama initialize olmuyor. declare olmadan initialize olmadığı için reference error veriyor yani benim bu değişkenin varlığından haberim var ama initialize etmedin diyor

//hatırlatma
/* 
let a = 5
let b = 10 // => syntax error
console.log(a)  */

//case 4
/* 
let a = 10;
{
    let a = 20
    console.log("i am in : ", a)
}
console.log("i am out : ", a)
// output => 20 10
// block scope'un içindeki a yeni bir a
 */

//case 5
/* let a = 10

{
    a = 20
    console.log("i am in : ", a)
}
console.log("i am out : ", a)
// output 20 20
// block scope'un içindeki a aynı a. çünkü a başlangıçta global alanda tanımlanmış.
 */

//case 6
/* {
    let a = 20
    console.log("i am in : ", a)
}
console.log("i am out : ", a)
//output => 20 ReferenceError: a is not defined. Çünkü a başta block scope'un içinde tanımlandığından dışarı çıkamayacak ve global alandan okunamayacak. */
