import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-car-add',
    templateUrl: './car-add.component.html',
    styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

    newCar = '';

    // @Output говорит ng, о том, что (onAddCar) нужно поставить на прослушку
    // сигннализируем далее через EventEmitter, в котором указываем, что он должен отправлять
    // в <{}> указываем, что EventEmitter будет передавать.
    @Output('getNewCarInfo') newCarEmmiter = new EventEmitter<{ name: string }>();

    addCar() {
        // далее для передачи данных нужно обратиться к в/у полю и воспользоваться методом .emit()
        // .emit() прописываем объект, который нужно передавать (тот из которого данные получаем).
        this.newCarEmmiter.emit({
            name: this.newCar
        });
        this.newCar = '';
    }

    constructor() {
    }

    ngOnInit() {
    }

}
