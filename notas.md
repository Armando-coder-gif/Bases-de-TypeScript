# Tipos de datos
Let nombre:string = 'Armando';
nombre = 'Jose'
Se puede✔️

Let nombre:string = 'Armando';
nombre = 123
no se puede porque es se inicializó como un string ❌

let hp: number | string = 95;
puede tener números o strings

# Arreglos
let habilidades: string[] = ['Bash', 'Counter', 'Healing']; // solo almacena strings

let habilidades: (boolean | string | number )[] = ['Bash', 'Counter', 'Healing', true, 123]; // almacena boolean | string | number

# Objetos
// Interfaces
interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
}

// Objetos
const personaje: Personaje = { // este objeto es de tipo personaje
    nombre: 'Armando',
    hp: 100,
    habilidades: habilidades,
}

# Funciones 
function sumar( a: number, b: number ): *number*{ // este number muestra que tipo de dato debe retornar. En este caso es de tipo number
    return (a + b);
}

const resultado = sumar( 10, 20 );

console.log( resultado );

# Desestructuración
- Objetos: para desestructurar *objetos* se hace con llaves {}
- Arreglos: para desestructurar *arreglos* se hace con llaves cuadradas []

# Genéricos
- un tipo genérico puede ser cualquier tipo de dato a la hora de llamarlo o algo implicito.
- <T> es un estándar para decir que se esta llamando a un genérico.
