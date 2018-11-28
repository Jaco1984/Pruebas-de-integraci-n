import { Jugador } from './clase';


xdescribe('Prueba de daño', () => {
    let jugador =  new Jugador();

    beforeAll(  () => {
        console.log("beforeAll");
    });
   beforeEach( () => {
       //console.log("beforeEach");
       //jugador.vida = 100;
       jugador = new Jugador();
   });
   afterAll( () =>{
       console.log("afterAll");
   });
   afterEach( () => {
       console.log("afterEach");
   });
    it('SI el daño es mayor a 100' , () => {

       // const jugador =  new Jugador();

        const resp = jugador.recibirDanio(20);

        expect(  resp ).toBe(80);
    });


    it('SI el daño es 50 debe retornar 50 de daño' , () => {
     console.log("ESta prueba va a fallar");
     //   const jugador =  new Jugador();

        const resp = jugador.recibirDanio(50);

        expect(  resp ).toBe(50);
    });

    xit('SI el daño es mayor a 100 debe retornar 0 de vida' , () => {
        console.log("ESta prueba va a fallar");
        //   const jugador =  new Jugador();
   
           const resp = jugador.recibirDanio(100);
   
           expect(  resp ).toBe(0);
       });
})