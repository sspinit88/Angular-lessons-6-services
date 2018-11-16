import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    // что бы отображалось значение app-car в app нужно указать отслеживаемое свойство, делается это с помощью @Input()
    @Input('carItem') car: { name: string, isSold: boolean };

    getClass() {
        return {
            'list-group-item-success': !this.car.isSold,
            'list-group-item-danger': this.car.isSold,
            'list-group-item': true,
        };
    }

    // метод, выполняемый при нажатии на одну из кнопок "купить" - "отказаться",
    // принимает в себя тип одно из указанных значений.
    onAction(type: string) {
        this.car.isSold = type === 'buy' ? true : false;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
