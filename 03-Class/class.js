// contoh cara membuat objek ES5

function Car(name) {
  this.name = name;
}

Car.prototype.getName = function () {
  return this.name;
};

var merk = new Car("Honda");
console.log(merk.getName());

console.log(merk instanceof Car);
console.log(merk instanceof Object);

// class pada JS ES 6
class Car2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let brand = new Car2("Honda");
console.log(brand.getName());
console.log(brand instanceof Car2);
console.log(brand instanceof Object);

// hal yang perlu diperhatiakan ketika membuat objek dengan class
// 1. pendeklarasian class tidak hoisted seperti function artinya harus kelasnya dulu baru mendefinisikan object di bawah nya
// 2. semua code dalam class dijalankan dengan mode strict dan ini tidak dapat diubah
// 3. ketika membuat objek di class harus dengan new
