"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1]
    };
})();
(() => {
    const client = {
        name: 'Giordan',
        age: 28,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Otawwa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const Client2 = {
        name: 'Patricia',
        age: 25,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U23'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map