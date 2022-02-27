/*
    ===== Código de TypeScript =====
*/

// Arreglos

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// Interfaces
interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string, // el question mark indica que puede tener o no la propiedad puebloNatal
}

// Objetos
const personaje: Personaje = { // este objeto es de tipo personaje
    nombre: 'Armando',
    hp: 100,
    habilidades: habilidades,
}

console.table( personaje );