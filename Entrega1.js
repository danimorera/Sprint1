//Nivell 1
/////Ex1/////////////////////////////////////////////
function consoleName(nom){
    console.log(nom);
};

//Nivell 2
/////Ex1/////////////////////////////////////////////
let nom = "John";
let cognoms = "Doe";
let missatge = `El nom és ${cognoms}, ${nom} ${cognoms}`;

console.log(missatge);

/////Ex2/////////////////////////////////////////////

/*
Invoca una funció que retorni un valor des de dins
 d'una template literal.
 - Al N2 E2 no estàs cridant a una funció des de dins
 d'un template literal
 -Al N2 E2 no necessites que la funcio retorni un 
 template literal, pot retornar el valor directament
*/
function literal() {
    let valor = "42";
    return(valor);
};
console.log(`${literal()}`);

//Nivell 3
/////Ex1/////////////////////////////////////////////
/*
Crea una matriu de deu funcions i emplena-la 
mitjançant un bucle de manera que cada funció compti 
del 0 al 9 per la consola. Invoca cada funció de 
l'array iterativament. Haurà de mostrar-se per 
consola el compte del 0 al 9 deu vegades.
*/

const matriu = [];
for (let i = 0; i < 10; i++) {
    matriu[i] = function count(){
        for(let i = 0; i < 10; i++){
            console.log(i);
        };
    };
};
for (let i = 0; i < matriu.length; i++) {
    matriu[i]();
};

/////Ex2/////////////////////////////////////////////
/*
Crea una funció anònima autoinvocable igualada a una 
variable que mostri per consola el nom de 
l'usuari/ària a rebut com a paràmetre.
*/
const autoinvocable = (function(nom2) {
       console.log(`El nom és ${nom2}`);
   })(nom);