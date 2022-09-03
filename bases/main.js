"use strict";
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    console.log('pasó por aquí');
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullname = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName).toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName);
        }
    };
    var name = fullname('Giordan', 'Arredondo', true);
    console.log({ name: name });
})();
(function () {
    var fullname = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no lastname');
    };
    var name = fullname('Giordan');
    console.log({ name: name });
})();
(function () {
    var fullname = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullname('Giordan', 'Arredondo');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent', 'Arredondo');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Gius el borracho';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatiSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1]
    };
})();
(function () {
    var myCustomVariable = 'Giordan';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 123.25998754;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormamu', 'Duende verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isBatman = (isSuperman) ? true : false;
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Help!');
    console.log('Hello world');
})();
(function () {
    var nada = null;
    console.log(nada);
})();
(function () {
    var avengers = 10;
    console.log({ avengers: avengers });
    var villians = 20;
    if (avengers < villians) {
        console.log('We are in problems!');
    }
    else {
        console.log('We are saved!');
    }
    avengers = Number('123ABC');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Bat\'man';
    var linternaVerde = "Linterna's Verde";
    var volcanNegro = "Heroe: Volcan Negro";
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "There isn't present");
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map