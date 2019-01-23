import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public carName = 'Mazda';
  public mileage = 100000;
  public fuelTankCapacity = 100;
  public fuelValue = 150;
  public characteristics: Array<string> = [
    'Двигатель 2 литра',
    'максимальная скорость 200 км/ч',
    'объем бензобака 100 литров'
  ];

  ngOnInit() {
  }

  drive() {
    if (this.fuelValue <= 0) {
      this.fuelValue = 0;
      this.mileage = this.mileage;
    } else {
      this.fuelValue -= 100;
      this.mileage += 100;
    }
  }

  fill() {
    this.fuelValue += 200;
  }

}
