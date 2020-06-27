//Estudiar a fondo esta funcion
//a modo de resumen, nos va permitir crear ACTION creators de una manera mas facil

export const mac = (type, ...argNames) => {
  //¿por que devuelve otra funcion?
  //Los action creators son funciones que devuelven un objeto por eso esta devolviendo una función
  //que expresa lo mismo, una funcion que devolvera un objeto
  //por que ...args?
  return function ac(...args) {
    //crea un objeto con la propiedad tipo, tipo viene de la funcion superior
    const action = { type };
    //parece que aca va construir la constante de action creator
    //si el creator necesita un payload o otra propiedad, este bloque se encargara de asignarlo al action
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    //finalmente la retorna el action creator, con esto la funcion automatiza
    //el escribir () => ({type}) se resumira en mac(type)
    //el escribir (payload) => ({type, payload}) se resumira en mac(type, 'payload')
    return action;
  };
};
