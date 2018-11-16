import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarsService {

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
    }
}
