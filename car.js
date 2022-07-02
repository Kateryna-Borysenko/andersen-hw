class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption; //потребление топлива
  #currentFuelVolume = 100;
  #isStarted = false;
  #mileage = 0;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuelVolume) {
    if (typeof fuelVolume !== 'number' || fuelVolume <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (this.#currentFuelVolume + fuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += fuelVolume;
  }

  drive(speed, driveHours) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость');
    }

    if (typeof driveHours !== 'number' || driveHours <= 0) {
      throw new Error('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    const fuelConsumption = this.#fuelConsumption * ((speed * driveHours) / 100);

    if (this.#currentFuelVolume - fuelConsumption < 0) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= fuelConsumption;
    this.#mileage += speed * driveHours;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    if ((typeof brand !== 'string') || (brand.length < 1 || brand.length > 50)) {
      throw new Error('brand - это строка от 1 до 50 символов включительно');
    }

    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    if ((typeof model !== 'string') || (model.length < 1 || model.length > 50)) {
      throw new Error('model - это строка от 1 до 50 символов включительно');
    }

    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    const currentYear = new Date().getFullYear();

    if ((typeof yearOfManufacturing !== 'number') || (yearOfManufacturing < 1900 || yearOfManufacturing > currentYear)) {
      throw new Error('yearOfManufacturing - число от 1900 до текущего года включительно');
    }

    this.#yearOfManufacturing = yearOfManufacturing;
  }

  get maxSpeed() {
    return `${this.#maxSpeed} km/h`;
  }

  set maxSpeed(maxSpeed) {
    if ((typeof maxSpeed !== 'number') || (maxSpeed < 100 || maxSpeed > 300)) {
      throw new Error('maxSpeed - число от 100 до 300 км/ч');
    }

    this.#maxSpeed = maxSpeed;
  }

  get maxFuelVolume() {
    return `${this.#maxFuelVolume} liters`;
  }

  set maxFuelVolume(maxFuelVolume) {
    if ((typeof maxFuelVolume !== 'number') || (maxFuelVolume < 5 || maxFuelVolume > 20)) {
      throw new Error('maxFuelVolume - число в литрах от 5 до 20');
    }

    this.#maxFuelVolume = maxFuelVolume;
  }

  get fuelConsumption() {
    return `${this.#fuelConsumption} liters/100 km`;
  }

  set fuelConsumption(fuelConsumption) {
    if (typeof fuelConsumption !== 'number') {
      throw new Error('fuelConsumption - это число');
    }

    this.#fuelConsumption = fuelConsumption;
  }

  get currentFuelVolume() {
    return `${this.#currentFuelVolume} liters`;
  }

  get isStarted() {
    return this.#isStarted ? 'true' : 'false';
  }

  get mileage() {
    return `${this.#mileage} km`;
  }
}


const car = new Car('BMW', '330i', 2019, 300, 20, 7.2);
car.start();
console.log('🍒', car.isStarted)
console.log(car.drive(100, 1));

car.shutDownEngine()
console.log('🍒', car.isStarted)

console.log('🍒', car.brand)
console.log('🍒', car.model)
car.model = 'new brand'
console.log('🍒', car.model)
console.log('🍒', car.yearOfManufacturing)
console.log('🍒', car.maxSpeed)
console.log('🍒', car.maxFuelVolume)
console.log('🍒', car.fuelConsumption)
console.log('🍒', car.currentFuelVolume)
console.log('🍒', car.mileage)


module.exports = { Car };