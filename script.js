console.groupCollapsed("Object");
//Asmuo

// Parašykite funkciją createPerson, kuri sukuria objektą su savybėmis: name, lastname ir age. Funkcija turi priimti šias savybes kaip argumentus ir grąžinti sukurtą objektą.

function createPerson(name, lastName, age) {
  return { name, lastName, age };
}
console.log(createPerson("Jonas", "Jonaitis", 30));

// Sukurkite funkciją printCarInfo, kuri atspausdina visą automobilio informaciją. Automobilis yra objektas su savybėmis: brand (markė), model (modelis), ir year (metai). Funkcija turi grąžinti eilutę su visomis automobilio savybėmis.

function printCarInfo(car) {
  return `Brand: '${car.brand}', model: '${car.model}', year: ${car.year}`;
}

console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 }));

// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.

function printEmployeeInfo(employees) {
  let names = Object.keys(employees);
  names.forEach((name) => {
    console.log(`Name: ${name}, Position: ${employees[name]}`);
  });
}
printEmployeeInfo({ Jonas: "Engineer", Petras: "Manager" });

// Parašykite funkciją surastiKnygasPagalPavadinima, kuri ieško visų knygų, kurių pavadinimai atitinka (arba dalinai atitinka) nurodytą paieškos terminą. Paieška taip pat turėtų būti case-insensitive. Knygos yra pateiktos kaip objektų masyvas su savybėmis title ir author. Funkcija priima knygos pavadinimo paieškos terminą kaip argumentą ir grąžina visas atitinkamas knygas.

const findBook = (books, searchQuery) =>
  books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

console.log(
  findBook(
    [
      { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" },
      { title: "Hobitas", author: "J.R.R. Tolkien" },
    ],
    "Poteris"
  )
);

// Jūsų užduotis - sukurti funkciją countAverages, kuri priima objektą, turintį studentų grupių pavadinimus kaip raktus ir studentų egzaminų balų masyvus kaip reikšmes. Funkcija turėtų grąžinti naują objektą su kiekvienos grupės vidurkiu.

const countAverages = (studentGroups) => {
  const averages = {};
  for (const group in studentGroups) {
    const average =
      studentGroups[group].reduce((sum, score) => sum + score, 0) /
      studentGroups[group].length;
    averages[group] = average;
  }
  return averages;
};

console.log(
  countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] })
);

// Sukurkite funkciją updateInventory, kuri priima esamą inventoriaus objektą ir pakeitimų masyvą. Kiekvienas pakeitimas yra objektas su item (prekės pavadinimu), change (kaitos kiekiu; gali būti neigiamas, jei prekė yra šalinama) ir action ("add" arba "remove"). Funkcija turėtų atnaujinti inventorių pagal pateiktus pakeitimus.

const updateInventory = (inventory, changes) => {
  changes.forEach((change) => {
    if (change.action === "add") {
      inventory[change.item] = (inventory[change.item] || 0) + change.change;
    } else if (change.action === "remove") {
      inventory[change.item] = (inventory[change.item] || 0) - change.change;
    }
  });
  return inventory;
};

console.log(
  updateInventory({ apples: 5, bananas: 8 }, [
    { item: "apples", change: 3, action: "add" },
    { item: "bananas", change: 2, action: "remove" },
  ])
);
console.groupEnd();

// OOP: Uždaviniai
// Automobilis
// LeNGVAS

// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą turnOn – kuris alert’ins vrooom. Sukurkite du objektus ir patikrinkite ar veikia tesingai 🚗.

// function Car(brand, model, engine) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.turnOn = function () {
//     alert("vrooom");
//   };
// }

// const myCar = new Car("BMW", 535, "diesel");
// const yourCar = new Car("AUDI", "Q5", "electric");

// console.log(myCar.engine);
// console.log(yourCar.model);

// Automobilio kaina
// Vidutinis

// Pakoreguokite šį car konstruktorių.

// Pridėkite papildomą property basePrice ir metodą getPrice.

// basePrice propertį įsirašys sukuriant objektą, tačiau getPrice, priklausomai nuo variklio, išmes kokia yra galutinė kaina.

// Jei variklis electric – kaina bus +10,000

// Jei diesel +5,000

// Jei petrol – kaina tokia kokia ir basePrice

// function Car(brand, model, engine, price) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.basePrice = price;
//   this.getPrice = function () {
//     let additionalPrice = 0;
//     if (this.engine === "electric") {
//       additionalPrice = 10000;
//     }
//     if (this.engine === "diesel") {
//       additionalPrice = 5000;
//     }
//     return this.basePrice + additionalPrice;
//   };
//   this.turnOn = function () {
//     alert("vrooom");
//   };
// }

// const myCar = new Car("BMW", 535, "diesel", 10000);
// const yourCar = new Car("AUDI", "Q5", "electric", 20000);

// console.log(yourCar.getPrice());

// Banko sąskaitos klasė
// Vidutinis

// Sukurkite klasę BankAccount, kuri turi savybes ownerName ir balance. Klasė taip pat turėtų turėti metodus deposit(amount) ir withdraw(amount), kurie atitinkamai didina arba mažina balance.

class BankAccount {
  constructor(ownerName, balance = 0) {
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
const account = new BankAccount("Jonas");
account.deposit(100);
account.withdraw(30);
console.log(account.balance);

// Transporto priemonių paveldėjimas
// Sudėtingas

// Sukurkite bazinę klasę Vehicle su savybėmis brand ir model. Taip pat sukurkite išvestines klases Car ir Bicycle. Car turi papildomą savybę engineType, o Bicycle - hasEngine. Kiekviena klasė turėtų turėti metodą information, kuris atspausdina visą turimą informaciją apie transporto priemonę.

class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  information() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model, engineType) {
    super(brand, model);
    this.engineType = engineType;
  }

  information() {
    return `${super.information()}, Engine Type: ${this.engineType}`;
  }
}

class Bicycle extends Vehicle {
  constructor(brand, model, hasEngine = false) {
    super(brand, model);
    this.hasEngine = hasEngine;
  }

  information() {
    return `${super.information()}, Has Engine: ${this.hasEngine}`;
  }
}

const car = new Car("Toyota", "Corolla", "Petrol");
console.log(car.information());

const bicycle = new Bicycle("Trek", "Marlin", true);
console.log(bicycle.information());
