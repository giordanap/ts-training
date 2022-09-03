(() => {

    const fullname = ( firstName: string, lastName: string ): string => {

        return `${ firstName } ${ lastName }`;

    }

    const name = fullname( 'Giordan', 'Arredondo' );

    console.log({ name });

})()

