import { Jugador2 } from './jugador2';


describe('Se lanza el emmit', () => {

    let jugador = Jugador2.prototype;

    beforeEach( () => jugador = new Jugador2() );

    it('Debe emitir un evento cuando recibe daño', () => {

        let nuevaVida = 0;
        jugador.vidaCambia.subscribe( vida => {
         nuevaVida = vida;
        });

        jugador.recibirDanio( 1000 );
        expect( nuevaVida ).toBe(0);

    });

    it('Debe emitir un evento cuando recibe daño y sobrevivir ', () => {

        let nuevaVida = 0;
        jugador.vidaCambia.subscribe( vida => {
         nuevaVida = vida;
        });

        jugador.recibirDanio( 50 );
        expect( nuevaVida ).toBe(50);

    });
});