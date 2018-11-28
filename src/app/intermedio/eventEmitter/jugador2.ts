import { EventEmitter } from '@angular/core';


export class Jugador2 {

    vida: number;
    vidaCambia: EventEmitter<number> = new EventEmitter<number>();


    constructor() {

        this.vida = 100;
    }

    recibirDanio( danio: number ) {
        if (danio >= this.vida) {
            this.vida =  0;
        } else {
            this.vida = this.vida - danio;
        }
        this.vidaCambia.emit( this.vida);
    }
}