/*
    ===== Código de TypeScript =====
*/

// Encadenamiento opcional

interface Pasajero{
    nombre: string;
    hijos?: string[]; // significa que esta propiedad es opcional
}
// no todos los pasajeros tienen hijos, por eso coloco el signo de interrogación

const pasajero1: Pasajero = {
    nombre: 'Armando',
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel'],
}

// yo desestructuré el arreglo para solo obtener los hijos
function imprimeHijos( {hijos}: Pasajero ): void{ 
    
    const cuantosHijos = hijos?.length || 0; // intenta obtener el length de los hijos, sino coloca undefined. Si es undefined regresa 0
    console.log(  cuantosHijos );
    
}

imprimeHijos( pasajero2 );
imprimeHijos( pasajero1 );
