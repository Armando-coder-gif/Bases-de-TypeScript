/*
    ===== Código de TypeScript =====
*/

// Clases 

class PersonaNormal{
    
    constructor( 
        // Propiedades
        public nombre: string,
        public direccion: string,
    ){}

}

// extender una clase o heredar
class Heroe extends PersonaNormal{

    constructor( 
        // Propiedades
        public  alterEgo: string,
        public edad: number,
        public nombreReal: string,
        
    ){
        super( nombreReal, 'New York, USA' ); // Método para llamar el constructor del que hereda 
    }
} 

const ironman = new Heroe( 'Ironman', 45, 'Tony');

console.log(ironman);