(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Contructor Avenger llamado!');
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName }`;
        }
 
    }

    class Xmen extends Avenger {
        
        constructor(
            name: string,
            realName: string,
            public isMutan: boolean
        ) {
        
            super( name, realName);
            console.log('Contructor Xmen llamado');
        
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {

            if ( name.length < 3 ) {

                throw new Error("");

            }

            this.name = name;
        }

        getFullnameDesdeXmen() {
            console.log( super.getFullname() );
        }

    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);

    // wolverine.fullName = 'Giordan';
    // console.log( wolverine.fullName );

})() 