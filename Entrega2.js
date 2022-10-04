//Nivell 1
/////Ex1////////////////////////////////////////////////////////
/*
Mostra per la consola el resultat d'una arrow function
autoinvocable que sumi dos nombres.
*/
(() => {console.log(10 + 2)})();


//Nivell 2
/////Ex1////////////////////////////////////////////////////////
/*
Crea una arrow function que, rebent un paràmetre,
retorni un objecte amb un atribut que tingui com a 
valor el paràmetre rebut.
*/
const createObject = (atribut) => ({atribut});
//console.log(createObject('random'))

/////Ex2////////////////////////////////////////////////////////
/*
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser 
instanciada. La classe inclourà un mètode dirNom que imprimeixi 
per consola el paràmetre
'nom'. Invoca el mètode dirNom des de fora de la classe.
*/
class Persona {
    constructor(nom){
        this.nom = nom;
    };

    dirNom(){
        console.log(this.nom);
    };
};

const alumne = new Persona("Dani");
alumne.dirNom();

//Nivell 3
/////Ex1////////////////////////////////////////////////////////
/*
Escriu una function creadora d'objectes que faci instàncies 
d'una classe abstracta. Invoca-la amb diferents definicions.
*/

