/*
    ===== Código de TypeScript =====
*/

// Interfaz
interface Player{
    nombre: string,
    pv: number, // puntos de vida
    mostrarPv: () => void; // definir métodos en interfaces
}

// Objeto
const nuevoPersonaje: Player= {
    nombre: 'Armando',
    pv: 70,
    mostrarPv(){
        console.log( 'Puntos de vida:', this.pv );
    }
}
    


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


function curar( personaje: Player, curarX: number ): void {
    personaje.pv += curarX;
}

curar(nuevoPersonaje, 5);

nuevoPersonaje.mostrarPv();




// const resultado = sumarFlecha( 10, 20 );
// const resultado = multiplicar( 5, 10 );

// console.log( resultado );

// primero van los argumentos
// OBLIGATORIOS
// OPCIONLES
// QUE TIENEN ALGUN VALOR POR DEFECTO