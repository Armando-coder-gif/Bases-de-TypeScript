/*
    ===== Código de TypeScript =====
*/


// Genéricos
// le puedo decir a la funcion que va a recibir algo de tipo T
// Puede ser de cualquier tipo. Del tipo que yo le mande
function queTipoSoy<T>( argumento: T ){ 
    return argumento;
}


let soyString = queTipoSoy( 'Hola mundo' );
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3] );

let soyExplicito = queTipoSoy<number>( 100 );

