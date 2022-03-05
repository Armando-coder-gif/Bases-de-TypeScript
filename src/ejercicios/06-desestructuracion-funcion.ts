/*
    ===== Código de TypeScript =====
*/

// Desestructuración de argumentos

interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Iphone 13',
    precio: 1000,
}

const laptop: Producto = {
    desc: 'Macbook',
    precio: 1500,
}

// calcula impuesto sobre ventas
function calculaISV( productos: Producto[] ): [number, number]{ 
    let total: number = 0;

    productos.forEach( ({ precio })=>{ // asi se desestructuran los argumentos
        total += precio;
    })

    return [total, total * 0.15];
}

const productos: Producto[] = [ telefono, laptop ] 

const [ total, isv ] = calculaISV(productos); // Desestructurando arreglo

console.log('Total: ', total);
console.log('ISV: ', isv);