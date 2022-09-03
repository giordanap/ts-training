(() => {

    type Avenger = {
        name: string;
        weapon: string;
    }

    const captainAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const avengers: Avenger[] = [ ironman , thor, captainAmerica ];

    for (const avenger of avengers) {
        console.log( avenger.name, avenger.weapon );
    }

})()