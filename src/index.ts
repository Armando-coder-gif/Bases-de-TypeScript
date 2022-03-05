/*
    ===== Código de TypeScript =====
*/

interface Detalle{
    autor: string;
    year: number;
}


interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 75,
    cancion: 'Te quiero más',
    detalles: {
        autor: 'Enghel',
        year: 2016,
    },
} 

// Desestructuración
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor, year } = detalles;

// o se puede hacer de esta manera

console.log( 'El volumen actual es de: ', vol );
console.log( 'El segundo actual es: ', segundo  );
console.log( 'La canción es: ', cancion  );
console.log( 'El autor es: ', autor );
console.log( 'El año es: ', year );

/*
si quiero cambiar el nombre de la variable 
entonces coloco volumen: vol
*/