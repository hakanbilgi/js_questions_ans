// 1 ile 100 arasındaki ÇİFT sayıları ekrana javascript kodları ile yazdırınız

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) console.log(i + "<br>");
// }

// Ekrana büyüyen font ile TÜRKİYE yazan javascript kodları

// for(let i = 0; i <= 10; i++) {
//     document.write("<span style='font-size:" + i + 5 + "px;'>TÜRKİYE</span><br/>");
// }

//3 ve 5’e tam bölünen sayıları ve bu sayıların toplamını yazdıran javascript kodları

// var toplam = 0;
// for (var i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     if (i != 90) {
//       document.write(i + "+");
//     } else {
//       document.write(i + "=");
//     }
//     toplam += i;
//   }
// }
// document.write(toplam);

// Ekrana
// *
// **
// ***
// şeklinde yıldızları yazdıran javascript kodları

// for(let i=1; i <= 20; i++) {
//     for(let x = 0; x < i; x++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// Kullanıcının girdiği mesajı yine kullanıcının girdiği tekrar sayısı kadar yazdıran javascript kodları

// let mesaj = prompt("Mesaj Girin");
// let sayi = +prompt("Tekrar Sayısını Giriniz");
// for(let i = 1; i <= sayi; i++) {
//     document.write(mesaj + "<br/>");
// }

// 1’ler çarpım tablosunu ekrana yazdıran javascript kodları

// for(let i = 1; i <= 10; i++) {
//     for(let j = 1; j <= 10;  j++) {
//         document.write(`${i} * ${j} = ${i*j} <br>`);
//         // document.write(i + "*" + j + "=" +(i*j) + "<br>");
//     }
//     document.write("-------------<br>");
// }

// / 10’dan 1’e doğru geri geri sayıları yazdıran javascript kodları
// for(let i = 10; i > 0; i--) {
//     document.write(`${i} <br>`);
//     // document.write(i + "<br>");
// }

// *******
// ******
// ****
// şeklinde yıldızları azalarak yazdıran javascript kodları
// for(let i = 7; i >= 4 ; i--) {
//     for( let j = 1; j <= i; j++){
//         document.write(`*`);
//     }
//     document.write(`<br>`)
// }

//! Çarpım Tablosu sorusu
// 1.çözüm

// let yazi = "";
// for (i = 1; i < 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     yazi += i + " * " + j + " = " + i * j + "<br>";
//   }
//   yazi += "--------------<br>";
// }
// document.getElementById("div1").innerHTML = yazi;

// 2. çözüm

// document.write("<table>");
// for (i = 1; i < 10; i++) {
//   document.write("<tr>");
//   for (j = 1; j < 10; j++) {
//     document.write("<td>" + i + " * " + j + " = " + i * j + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");

// 10’lar çarpım tablosunu ekranda bir tablo içinde veren javascript kodları

document.write("<table border='3'><tr>");
for (var x = 1; x <= 10; x++) {
  document.write("<td>");
  for (var i = 1; i <= 10; i++) {
    document.write(x + "*" + i + "=" + x * i + "<br/>");
  }
  if (x == 5) {
    document.write("</tr><tr>");
  }
  document.write("</td>");
}
document.write("</tr><table>");










