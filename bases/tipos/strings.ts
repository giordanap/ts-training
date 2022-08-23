(() => {

    const batman: string = 'Bat\'man';
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;

    console.log(`I'm ${ batman }`);
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || `There isn't present` );

})()