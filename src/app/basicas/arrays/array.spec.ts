import { obtenerRobots } from "./array";


describe('Prueba de arrays', () =>{

    it('Numero de objetos mayor que 3' , () =>{

        const resp = obtenerRobots();
        
        expect( resp.length ).toBeGreaterThanOrEqual(3);

    });

    it('Que este Megaman y Jarvis' , () =>{

        const resp = obtenerRobots();
        
        expect( resp ).toContain('Megaman');
        expect( resp ).toContain('Jarvis');

    });
})