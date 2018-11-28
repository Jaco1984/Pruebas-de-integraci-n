import { incrementar } from './numeros';


describe('Prueba de numero', () => {


    it('debe retornar si el numero es mayor de 100', () => {

       const resp =  incrementar(300);
       expect( resp ).toBe(100);


    });

    it('debe retornar si el numero es menor de 100', () => {

        const resp =  incrementar(50);
        expect( resp ).toBe(51);
 
 
     })
})