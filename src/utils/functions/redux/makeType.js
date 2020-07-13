//Funcion Currying, la usamos para mejorar la creación de action types.
//podemos guardar la primera parte del currying con el nombre del modulo que vamos a usar, y luego ir creando acciones
export const makeType = m => a => `${m}/${a}`;
