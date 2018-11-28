import { usuarioLogueado } from './booleanos';


describe('Prueba logueado ', () => {

    it('SI es esta logueado es true', () => {

        const resp = usuarioLogueado();
        expect( resp ).toBeTruthy;
    })
})