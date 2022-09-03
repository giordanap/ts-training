(() => {

    type avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    // const { poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( { vision, ...rest }: avenger ) => {
        console.log( vision, rest );
    }

    // printAvenger( avengers );

    const avengersArr: [ string, boolean, number ] = ['cap. America', true, 150.15];
    const [ capitan, ironman, seriaUnNumero] = avengersArr;
    // console.log({ ironman, capitan });

})()