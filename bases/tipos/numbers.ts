(() => {

    let avengers = 10;

    console.log({ avengers });
    
    const villians:number = 20;
    
    if ( avengers < villians ) {
        console.log('We are in problems!');
    } else {
        console.log('We are saved!');
    }

    avengers = Number('123ABC');

    console.log({ avengers });

})()