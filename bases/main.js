"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    };
    const printAvenger = (_a) => {
        var { vision } = _a, rest = __rest(_a, ["vision"]);
        console.log(vision, rest);
    };
    const avengersArr = ['cap. America', true, 150.15];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
})();
(() => {
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const name = 'Giordan';
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map