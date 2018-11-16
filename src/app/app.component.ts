import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

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

    updateCars(car: { name: string }) {
        if (car.name === '') {
            return null;
        }
        this.cars.push(
            {
                name: car.name,
                isSold: false
            }
        );
    }

}
