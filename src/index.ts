/*
    ===== Código de TypeScript =====
*/

// Funciones
function sumar( a: number, b: number ): number{
    return (a + b);
}

// función de flecha
const sumarFlecha = ( a: number, b: number ):number => { 
    return a + b
};

function multiplicar( numero: number , otroNumero?: number , base: number = 2 ): number {
    return  numero * base
}


// const resultado = sumarFlecha( 10, 20 );
const resultado = multiplicar( 5, 10 );

console.log( resultado );

// primero van los argumentos
// OBLIGATORIOS
// OPCIONLES
// QUE TIENEN ALGUN VALOR POR DEFECTO