const ERROR = {
  start: 'Машина уже заведена',
  shutDownEngine: 'Машина ещё не заведена',
  invalidFuelVolume: 'Неверное количество топлива для заправки',
  fullTank: 'Топливный бак переполнен',
  invalidSpeed: 'Неверная скорость',
  invalidDriveHours: 'Неверное количество часов',
  maxSpeed: 'Машина не может ехать так быстро',
  isStarted: 'Машина должна быть заведена, чтобы ехать',
  notEnoughFuel: 'Недостаточно топлива',
  invalidString: 'это строка от 1 до 50 символов включительно',
  maxSpeed: 'maxSpeed - число от 100 до 300 км/ч',
  maxFuelVolume: 'maxFuelVolume - число в литрах от 5 до 20',
  fuelConsumption: 'fuelConsumption - это число'
}

class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
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
      throw new Error(ERROR.start);
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error(ERROR.shutDownEngine);
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuelVolume) {
    if (typeof fuelVolume !== 'number' || fuelVolume <= 0) {
      throw new Error(ERROR.invalidFuelVolume);
    }

    if (this.#currentFuelVolume + fuelVolume > this.#maxFuelVolume) {
      throw new Error(ERROR.fullTank);
    }

    this.#currentFuelVolume += fuelVolume;
  }

  drive(speed, driveHours) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error(ERROR.invalidSpeed);
    }

    if (typeof driveHours !== 'number' || driveHours <= 0) {
      throw new Error(ERROR.invalidDriveHours);
    }

    if (speed > this.#maxSpeed) {
      throw new Error(ERROR.maxSpeed);
    }

    if (!this.#isStarted) {
      throw new Error(ERROR.isStarted);
    }

    const fuelConsumption = this.#fuelConsumption * ((speed * driveHours) / 100);

    if (this.#currentFuelVolume - fuelConsumption < 0) {
      throw new Error(ERROR.notEnoughFuel);
    }

    this.#currentFuelVolume -= fuelConsumption;
    this.#mileage += speed * driveHours;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    if ((typeof brand !== 'string') || (brand.length < 1 || brand.length > 50)) {
      throw new Error('brand - ' + ERROR.invalidString);
    }

    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    if ((typeof model !== 'string') || (model.length < 1 || model.length > 50)) {
      throw new Error('model - ' + ERROR.invalidString);
    }

    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    const currentYear = new Date().getFullYear();

    if ((typeof yearOfManufacturing !== 'number') || (yearOfManufacturing < 1900 || yearOfManufacturing > currentYear)) {
      throw new Error('yearOfManufacturing - ' + ERROR.invalidString);
    }

    this.#yearOfManufacturing = yearOfManufacturing;
  }

  get maxSpeed() {
    return `${this.#maxSpeed} km/h`;
  }

  set maxSpeed(maxSpeed) {
    if ((typeof maxSpeed !== 'number') || (maxSpeed < 100 || maxSpeed > 300)) {
      throw new Error(ERROR.maxSpeed);
    }

    this.#maxSpeed = maxSpeed;
  }

  get maxFuelVolume() {
    return `${this.#maxFuelVolume} liters`;
  }

  set maxFuelVolume(maxFuelVolume) {
    if ((typeof maxFuelVolume !== 'number') || (maxFuelVolume < 5 || maxFuelVolume > 20)) {
      throw new Error(ERROR.maxFuelVolume);
    }

    this.#maxFuelVolume = maxFuelVolume;
  }

  get fuelConsumption() {
    return `${this.#fuelConsumption} liters/100 km`;
  }

  set fuelConsumption(fuelConsumption) {
    if (typeof fuelConsumption !== 'number') {
      throw new Error(ERROR.fuelConsumption);
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

module.exports = { Car };