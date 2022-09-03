(() => {

    const fullname = ( firstName: string, lastName?: string ): string => {

        return `${ firstName } ${ lastName || 'no lastname' }`;

    }

    const name = fullname( 'Giordan' );

    console.log({ name });

})()

