function createMachine1(name, status) {
  return {
    name: name,
    status: status,
  };
}

function createMachine2(name, status) {
  return {
    name: name,
    status: status,
  };
}

console.log(createMachine1("Machine 1", "on"));
console.log(createMachine2("Machine 2", "on"));
