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

// Desestructuración de objetos
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor, year } = detalles;

// o se puede hacer de esta manera

// const { volumen, segundo, cancion } = reproductor;
// const { autor, year } = reporductor.detalles;

// console.log( 'El volumen actual es de: ', vol );
// console.log( 'El segundo actual es: ', segundo  );
// console.log( 'La canción es: ', cancion  );
// console.log( 'El autor es: ', autor );
// console.log( 'El año es: ', year );

/*
si quiero cambiar el nombre de la variable 
entonces coloco volumen: vol
*/


// Desestructuración de arreglos

const avengers: string[] = ['Ironman', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];

const [ heroe1,  heroe2, heroe3, heroe4, heroe5 ] = avengers;

console.log('Heroe 1: ', heroe1);
console.log('Heroe 2: ', heroe2);
console.log('Heroe 3: ', heroe3);
console.log('Heroe 4: ', heroe4);
console.log('Heroe 5: ', heroe5);

// si no necesito algunas variables en la desestructuración
// entonces le coloco un coma: [ , , heroe3]