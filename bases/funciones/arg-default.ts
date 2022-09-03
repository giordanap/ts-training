(() => {

    const fullname = ( firstName: string, lastName?: string, upper: boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName }`;
        }

    }

    const name = fullname( 'Giordan', 'Arredondo', true);

    console.log({ name });

})()