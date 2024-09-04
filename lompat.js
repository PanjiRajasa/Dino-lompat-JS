var isObjectMoving = true;

/* Kenapa di dalam kode program dibawah kita sering menjumpai style DOM yang -1? 
Karena disini kasusnya kita ingin membuat sebuah object yang bergerak, jadi disini kita memanfaatkan fungsi setTimeOut untuk melakukan operasi perulangan -1 pada posisi object misal object memiliki margin left 6px maka dengan  setTimeout yang didalamnya berisikan DOM yang mengurangi -1 style margin left object, margin left akan berkurang 1 demi 1 sehingga object akan seolah-olah bergerak dari kiri ke kanan anggaplah seperti ini


1  2  3  4  5  6
               Object kondisi 1

            Object kondisi 2

          Object kondisi 3

        Object kondisi 4
        
      Object kondisi 5

    Object kondisi 6

  Object kondisi 7

Object kondisi ke 8

dan karena dalam setTimeOut() terjadi pemanggilan fungsi utama secara terus menerus maka kondisi diatas akan terus berulang yang menyebabkan terjadinya efek animasi bias seolah-olah object terus bergerak dari kanan ke kiri

*/

function SetBackgroundMoving() {
  if (isObjectMoving == true) {
    setTimeout(function () {
      //ambil tag background dengan DOM
      var background = document.querySelector("#background");

      //masukin CSS backgroundPosition ke background
      background.style.backgroundPosition =
        parseInt(background.style.backgroundPosition.replace("px", "")) -
        1 +
        "px"; //#1

      //Penjelasan kode diatas #1
      //.replace('px','') fungsinya untuk
      /*Bagian ini menghapus satuan `px` dari nilai posisi yang diambil, karena nilai `backgroundPosition` biasanya berformat seperti `"10px 20px"` untuk posisi X dan Y. Jika hanya satu nilai yang disimpan, itu akan menjadi sesuatu seperti `"10px"`.*/

      /*parseInt(background.style.backgroundPosition.replace('px',''))
 `replace` menghapus `px`, sehingga yang tersisa hanyalah angka. `parseInt` kemudian mengonversi string angka tersebut menjadi tipe data integer (bilangan bulat).  4. */

      /*parseInt(background.style.backgroundPosition.replace('px',''))-1
 Setelah mendapatkan nilai numerik, kode ini menguranginya dengan `1`. Ini berarti bahwa posisi latar belakang akan bergeser ke kiri sebanyak 1 piksel (dalam kasus posisi horizontal).  5. */

      /* + 'px'
 Nilai yang sudah dikurangi tadi kemudian dikonversi kembali menjadi string dan ditambahkan satuan `px` agar dapat diatur kembali sebagai nilai CSS.  6.  Mengatur Kembali `backgroundPosition`: javascript Copy code   background.style.backgroundPosition = (parseInt(background.style.backgroundPosition.replace('px',''))-1) + 'px';
 Nilai yang baru dihasilkan tadi kemudian diatur kembali ke properti `backgroundPosition` pada elemen yang dipilih. */

      //ambil tag class score pakai DOM
      var score = document.querySelector("#score");

      //Kode #2
      score.innerHTML =
        parseInt(document.querySelector("#score").innerHTML) + 1;

      /*Penjelasan Langkah demi Langkah: 1.  Memilih Elemen dengan ID `score`: javascript Copy code   document.querySelector("#score")
 Bagian ini menggunakan `document.querySelector` untuk memilih elemen HTML yang memiliki ID `score`. Misalnya, elemen HTML berikut: html Copy code   <div id="score">5</div>
 Kode tersebut akan memilih elemen `<div>` ini.  2.  Mengambil Konten dalam `innerHTML`: javascript Copy code   document.querySelector("#score").innerHTML
 Setelah elemen `#score` dipilih, `innerHTML` digunakan untuk mendapatkan konten teks di dalam elemen tersebut. Dalam contoh kita, `innerHTML` akan mengembalikan string `"5"`.  3.  Mengonversi Konten Teks Menjadi Angka: javascript Copy code   parseInt(document.querySelector("#score").innerHTML)
 `parseInt` mengonversi string `"5"` menjadi bilangan bulat `5`. Ini penting karena jika kamu ingin melakukan operasi aritmatika (seperti penambahan), kamu harus bekerja dengan tipe data angka (integer), bukan string.  4.  Menambah 1 pada Nilai Angka: javascript Copy code   parseInt(document.querySelector("#score").innerHTML) + 1
 Setelah nilai konten elemen `#score` dikonversi menjadi angka, kode ini menambah 1 pada nilai tersebut. Jika nilai awal adalah `5`, maka hasilnya menjadi `6`.  5.  Mengatur `innerHTML` dengan Nilai yang Baru: javascript Copy code   score.innerHTML = ...
 Bagian terakhir dari kode ini adalah mengatur `innerHTML` dari elemen `score` ke nilai baru yang dihasilkan. Jadi, jika nilai awalnya `5`, maka sekarang `innerHTML` dari elemen tersebut akan diatur menjadi `"6"`. */

      //Memanggil fungsi SetBackgroundMoving() terus menerus
      SetBackgroundMoving();
    }, 6); //kenapa , 6 diakhirnya? #3

    //Penjelasan #3
    /* Penjelasan •  `setTimeout(function() { ... }, 6);`: `setTimeout` adalah fungsi JavaScript yang digunakan untuk menunda eksekusi suatu fungsi atau kode dalam jangka waktu tertentu yang ditentukan dalam milidetik.  •  `function() { ... }`: Ini adalah fungsi anonim (tanpa nama) yang akan dieksekusi setelah waktu penundaan selesai. Dalam contoh kamu, fungsi ini melakukan dua hal: memperbarui posisi latar belakang (`backgroundPosition`) dan menambah nilai elemen dengan ID `score`.  •  `, 6`: Bagian `6` di sini adalah jumlah waktu penundaan sebelum fungsi di dalam `setTimeout` dijalankan. Angka ini mewakili waktu dalam milidetik (1 milidetik = 1/1000 detik). Jadi, setelah 6 milidetik, fungsi anonim akan dieksekusi.   Mengapa `6` Milidetik? • Responsivitas: Penggunaan 6 milidetik memungkinkan eksekusi fungsi hampir seketika tetapi dengan sedikit penundaan yang cukup untuk memastikan operasi lain di browser selesai terlebih dahulu. Ini sering digunakan dalam animasi atau tugas-tugas yang membutuhkan eksekusi cepat namun berurutan. • Looping atau Animasi: Jika kamu menjalankan `setTimeout` dalam loop atau berulang kali (misalnya dengan memanggil `SetBackgroundMoving()`), penundaan kecil seperti 6 milidetik dapat membantu dalam membuat animasi atau pergerakan latar belakang lebih halus.*/
  }
}

//Memanggil fungsi SetBackgroundMoving() fungsi intinya membuat gambar background bergerak secara berulang dengan memanfaatkan asynchronous/kode asynchronous akan tetap dieksekusi tanpa memperdulikan urutan kode. Kode setTimeout(fungsi(), (setiap berapa milidetik akan dieksesuki fungsi dikananya)) yang menjadi inti fungsinya.

SetBackgroundMoving();

//fungsi untuk buat objek rintangan gerak 
function setBoxMoving() {
  //ambil div dengan id character dan box dengan DOM
    const box = document.querySelector("#box"),
    box2 = document.querySelector("#box2"),
    character = document.querySelector("#character");

  //disini kita mmebuat box menjadi bergerak sebagai obstacle dengan menggunakan fungsi setTimeout() hampir sama seperti fungsi sebelumnya yang membuat background menjadi bergerak
  setTimeout(function () {


    //kita setting style margin left dari box dengan metode yang sama seperti saat kita setting style backgroundPosition
    box.style.marginLeft =
      parseInt(box.style.marginLeft.replace("px", "") - 1.5) + "px";

    box2.style.marginLeft =
    parseInt(box2.style.marginLeft.replace("px", "") - 1.5) + "px";



      
    //Disini kita memainkan logika CSS untuk mencipatakan efek collision

    //disini kita menetapkan -100 sebagai batas maksimal object rintangan gerak ke kiri artinya kalau posisinya udh lebih -100 dia bakal kita balikin lagi ke posisi 600px
    if (parseInt(box.style.marginLeft.replace("px", "")) < -100) {
      box.style.marginLeft = "600px";
      box2.style.marginLeft = "740px";
    }
    //untuk mendeteksi collision
    if (
      (character.offsetTop + 45 >= box.offsetTop &&
      character.offsetLeft + 45 >= box.offsetLeft &&
      character.offsetTop + 45 <= box.offsetTop + 45 &&
      character.offsetLeft <= box.offsetLeft + 45)
      
      ||

      (character.offsetTop + 50 >= box2.offsetTop &&
        character.offsetLeft + 50 >= box2.offsetLeft &&
        character.offsetTop + 50 <= box2.offsetTop + 50 &&
        character.offsetLeft <= box2.offsetLeft + 50)

    ) {
      alert(
        "GAME OVER ): Semoga Beruntung Di Lain Waktu! Score anda: " +
          document.querySelector("#score").innerHTML
      );

      character.setAttribute("class", "freeze");

      isObjectMoving = false;
    } else {
      //memanggil fungsi terus menerus
      setBoxMoving();
    }
  }, 6);

}

//fungsi untuk lompat menggunakan tombol spasi
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 32) {
    //setting karakter untuk jump
    document.getElementById("character").style.marginTop = "100px";
    document.getElementById("character").setAttribute("class", "freeze");

    //kembali ke tanah
    setTimeout(function () {
      document.getElementById("character").style.marginTop = "223px";

      document.getElementById("character").setAttribute("class", "");
    }, 650);
  }
});


setBoxMoving();