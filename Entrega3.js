//Nivell 1
/////Ex1////////////////////////////////////////////////////////
/*
Crea una funció que retorni una Promise que invoqui la funció 
resolve() o reject() que rep. Invoca-la passant-li les dues 
funcions de manera que imprimeixin un missatge diferent depenent
 de si la Promise es resol o no.
*/

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
      resolve("A Lannister always pays his debts");
    } else {
      reject("I told you not to trust me!");
    }
  });

myPromise.then(result => {
   console.log(result);
 });

myPromise.catch(error => {
   console.log(error);
 })


/////Ex2////////////////////////////////////////////////////////

/*
Crea una arrow function que rebi un paràmetre i una funció 
callback i li passi a la funció un missatge o un altre 
(que s'imprimirà per consola) en funció del paràmetre rebut.
*/
const operation = (x, callback) => {
    return callback(x);
};

operation(3, (x) => {
    x >= 0 ? console.log("Positiu o 0") : console.log("Negatiu");
});


//Nivell 2

let employees = [{
    id: 1, //employees[0].id
    name: 'Linux Torvalds'
}, {
    id: 2, //employees[1].id
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
/////Ex1////////////////////////////////////////////////////////
/*
Donats els objectes employees i salaries, crea una arrow 
function getEmployee() que retorni una Promise efectuant la 
cerca en l'objecte pel seu id.
*/
const  getEmployee = (id) => {
  return new Promise((resolve, reject) => {
      let found = false;
      let i = 0
      while (i < employees.length && !found) {
          if(id == employees[i].id){
              found = true;
          }
          if(!found){
            i++;
          }
      }
    if(found) {
      resolve(employees[i]);
    } else {
      reject("Not found!");
    }
  })
};

/////Ex2////////////////////////////////////////////////////////
/*
Crea una altra arrow function getSalary() similar a l'anterior
 que rebi com a paràmetre un objecte employee i retorni el seu
 salari.
*/

const  getSalary = (employee) => {
  return new Promise((resolve, reject) => {
        let found = false;
        let i = 0;
        while (i < salaries.length && !found) {
            if(employee.id == salaries[i].id){
                found = true;
            }
            if(!found){
              i++;
            }
        }
    if(found) {
      resolve(salaries[i].salary);
    } else {
      reject("Not found!");
    }
  })
};
/* getSalary(employees[0])
    .then((result => console.log(result))); */

/////Ex3////////////////////////////////////////////////////////
/*
Invoca la primera funció getEmployee() i després getSalary()
 niant l'execució de les dues promises de manera que es retorni
  per la consola el nom de l'empleat/da i el seu salari.
*/
//console.log(employees[0]);
getEmployee(1)
    .then(obEmpl => 
      getSalary(obEmpl) //retorna la promesa de salari
        .then((obSalary => console.log(`${obEmpl.name} : ${obSalary}`)))); //retorna el salari



//Nivell 3
/////Ex1////////////////////////////////////////////////////////
/* 
Fixa un element catch a la invocació del nivell anterior que
 capturi qualsevol error i el mostri per la consola.  
*/
getEmployee(1)
    .then(obEmpl => 
      getSalary(obEmpl) //retorna la promesa de salari
        .then((obSalary => console.log(`${obEmpl.name} : ${obSalary}`)))) //retorna el salari
    .catch(error => {console.log(error)});