import {Injectable} from '@angular/core';
// импортируем сервис
import {ConsoleService} from './console.service';

// этот декоратор позволяет импортиоровать в сервис различные сущности
@Injectable({
    providedIn: 'root'
})
export class CarsService {

    // инициализируем ранее созданный сервис
    constructor(private consoleService: ConsoleService) {
    }

    // выносим ранее созданный массив с данными из app.component.ts
    cars = [
        {
            name: 'Ford',
            isSold: false
        },
        {
            name: 'Mazda',
            isSold: true
        },
        {
            name: 'Audi',
            isSold: true
        },
    ];

    addCarServ(name: string) {
        this.cars.push({
            isSold: false,
            name: name
        });
        this.consoleService.log(`Машина ${name} добавлена! (service-in-service)`);
    }
}
