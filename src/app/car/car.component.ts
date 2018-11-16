import {Component, Input, OnInit} from '@angular/core';
// импортируем сервис
import {ConsoleService} from '../console.service';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
    providers: [ConsoleService]
})
export class CarComponent implements OnInit {
    // инициализируем ранее созданный сервис через constructor
    constructor(private consoleService: ConsoleService) {

    }

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

        this.consoleService.log(`${this.car.name} status ${type}`);
    }


    ngOnInit() {
    }

}
