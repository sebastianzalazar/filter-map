async function obtenerPersonajes(){
    let res = await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();

    // data.results.forEach(element => {
    //     console.log(element.name + " "+ element.status);
    //     console.log();
    // });

    let personajes = await data.results.map(personaje => ({nombre : personaje.name, tipo: personaje.type}));

    console.log(personajes);

    console.log(personajes[0].nombre);

    let personajesMayuscula = await data
    
    let femeninoNombres = await femenino.map(personaje => personaje.name);
    console.log(femeninoNombres);