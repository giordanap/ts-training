(() => {

    enum AudioLevel {
        min = 1,
        medium,
        medium2,
        max = 2
    };

    let currentAudio = AudioLevel.max;

    console.log( currentAudio );
    console.log( AudioLevel );

})()