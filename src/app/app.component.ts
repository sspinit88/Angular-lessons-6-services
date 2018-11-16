import {Component, OnInit} from '@angular/core';
// импортируем сервис с массивом машин
import {CarsService} from './cars.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // providers: [CarsService]
})

export class AppComponent implements OnInit {

    // cоздаем пустой массив, в который будем сохранять данные из массива cars из car.services.ts
    cars = [];

    // инициализируем ранее созданный сервис через constructor
    constructor(private carServ: CarsService) {

    }

    // забираем машины после полной инициализации
    ngOnInit() {
        this.cars = this.carServ.cars;
    }

}
