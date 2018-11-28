

export function incrementar( numero: number ) {
    
    if ( numero > 100 ) {
        return 100;
    } else {
        //undefined  si quitamos el return
        return numero + 1;
    }
}