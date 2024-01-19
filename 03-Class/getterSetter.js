// getter dan setter adalah metode yang digunakan untuk meng-akses dan mengubah nilai properti dari objek.
// Getter di gnakan untuk membaca nilai properti,sedangkan setter digunakan untuk menulis nilai property

// contoh tanpa getter dan setter
class Coba {
  constructor(name) {
    this.name = name;
  }
}

let coba = new Coba("coba");
console.log(coba.name);
coba.name = "coba xxx";
console.log(coba.name);

// contoh di ES5

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.setName = function (name) {
  this.name = name;
};

var jon = new Person("Jon");
console.log(jon.getName());
jon.setName("Jon xxx");
jon.name = "Jon xxx111";
console.log(jon.getName());

class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

var jon2 = new Person2("Jon");
console.log(jon2.getName());
jon2.setName("Jon xxx");
console.log(jon2.getName());

// es6 memakai get dan setter

class Person3 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    // pakai _ kalau get dari js dam jangan lupa pakai this
    return this._name;
  }

  set name(name) {
    // bisa juga di tambahkan validasi di setnya dan kondisi
    name = name.trim();
    if (name.length == 0) {
      throw new Error("Name is empty");
    }
    this._name = name;
  }
}

let jon3 = new Person3("Gibahtech");
console.log(jon3.name);
jon3.name = "Ahmad Aziz";
console.log(jon3.name);

// getter dan setter dengan bentuk object literal

let meeting = {
  attendance: [],
  add(attend) {
    console.log(`add ${attend} to the meeting`);
    this.attendance.push(attend);
    return this;
  },
  get latest() {
    let count = this.attendance.length;
    return count == 0 ? undefined : this.attendance[count - 1];
  },
};

meeting.add("John").add("Jane").add("Jack");
console.log(`Latest: ${meeting.latest}`);
