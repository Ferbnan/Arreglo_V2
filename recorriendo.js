var articulos = [
    {nombre:"Bici", costo: 3000 },
    {nombre:"TV", costo: 2500 },
    {nombre:"Libro", costo: 320 },
    {nombre:"Celular", costo: 3580 },
    {nombre:"laptop", costo: 11500 },
    {nombre:"teclado", costo: 690 },
    {nombre:"mouse", costo: 359 },
    {nombre:"camara", costo: 999 },
];

//filter Genera un nuevo array
var articulofiltrado = articulos.filter(function(articulo){
//articulos con precio menor o igual 500 pesos
return articulo.costo <=500;
});

console.log(articulofiltrado);


//meotodo de búsqueda de solo articulos
//map Ayuda a mapear ciertos elementos de los articulos, es necesario generar nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})
console.log(nombreArticulos);




//metodo de busqueda específica find
//find Ayuda a encontrar algo dentro del array articulos
var encuentraarticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});
console.log(encuentraarticulo);


//Metodo de busqueda forEach
/* forEach No es necesario generar nuevo array, se utiliza para realizar 
un recorrido de un array principal */
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})


//some Se genera nuevo array, regresa un condición en Boolean, regresa un true o false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos)