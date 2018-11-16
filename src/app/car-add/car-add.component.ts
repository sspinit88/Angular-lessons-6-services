import {Component, OnInit,} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
    selector: 'app-car-add',
    templateUrl: './car-add.component.html',
    styleUrls: ['./car-add.component.css'],
    // providers: [CarsService]
})
export class CarAddComponent implements OnInit {

    newCar = '';

    constructor(private carServ: CarsService) {

    }

    addCar() {
        // более не нужен эмит, будем получать данные из сервиса
        // что бы код корректно работал нужно регистрировать сервис в модуле
        // providers: [CarsService] удаляем из компонент
        this.carServ.addCarServ(this.newCar);
        this.newCar = '';
    }

    constructor() {
    }

    ngOnInit() {
    }

}
