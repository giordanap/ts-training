(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ): void;
    }
    
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Giordan',
        age: 28,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Otawwa'
        },
        getFullAddress( id: string) {
            return this.address.city;
        }
    }

    const Client2: Client = {
        name: 'Patricia',
        age: 25,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U23'
        },
        getFullAddress( id: string) {
            return this.address.city;
        }
    }

})()