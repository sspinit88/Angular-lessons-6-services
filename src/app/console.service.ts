import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConsoleService {
    log(str: string) {
        console.log(str);
    }

    constructor() {
    }
}
