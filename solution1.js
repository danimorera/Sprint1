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
function consoleLiteral(){
    console.log(`El nom és ${cognoms}, ${nom} ${cognoms}`);
};

//Nivell 3
/////Ex1/////////////////////////////////////////////
const fun9 = fun8 = fun7 = fun6 = fun5 = fun4 = fun3 = fun2 = fun1 = fun0 = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);
    };
};

const matriu = [
    fun0,
    fun1,
    fun2,
    fun3,
    fun4,
    fun5,
    fun6,
    fun7,
    fun8,
    fun9
];

for(let i = 0; i < matriu.length; i++) {
    matriu[i]();
};

/////Ex2/////////////////////////////////////////////
let autoinvocable = (function (nom2) {
       console.log(`El nom és ${nom2}`);
   })(nom);