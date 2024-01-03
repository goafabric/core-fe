class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

function test() {
    const myCar1 = new Car("Ford", 2014);
    console.log(myCar1.year)
}

test();