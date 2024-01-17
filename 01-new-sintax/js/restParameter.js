// todo rest parameter berfungsi untuk membuat fungsi yang dapat menerima jumlah argument yang tidak terbatas.
// todo argument2x ini akan di kumpulkan menjadi sebuah Array didalam fungsi
// todo rest parameter dituliskan menggunakan tiga titik (...) dan di ikuti oleh variable yang akan menampung array argument
// todo Reduce adalah sebuah fungsi yang digunakan untuk mengeksekusi nilai pada setiap element dengan tipe array dan menampilkan dalam sebuah nilai saja.

function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

let result = sum(10, "hallo", 30, null, undefined, "gibahtech");
console.log(result);

// ? bisa juga untuk string

const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + "" + curr;
  });
};

let message = combine("Hallo", " Kembali", " ke dasar ", "sama gibahtech");
console.log(message);
