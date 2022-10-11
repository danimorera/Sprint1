//Promises & Callbacks
//N1 E2
/*
Crea una arrow function que rebi un paràmetre i una funció 
callback i li passi a la funció un missatge o un altre 
(que s'imprimirà per consola) en funció del paràmetre rebut.
*/
const operation = (x, callback) => {
    return callback(x);
};

/* operation(3, (x) => {
    x >= 0 ? console.log("Positiu o 0") : console.log("Negatiu");
}); */



//N2 E1 & E2

let employees = [{
    id: 1, //employees[0].id
    name: 'Linux Torvalds'
}, {
    id: 2, //employees[1].id
    name: 'Bill Gates'
}, {
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

/*
Donats els objectes employees i salaries, crea una arrow 
function getEmployee() que retorni una Promise efectuant la 
cerca en l'objecte pel seu id.
*/
const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let found = false;
        let i = 0
        while (i < employees.length && !found) {
            if (id == employees[i].id) {
                found = true;
            }
            if (!found) {
                i++;
            }
        }
        if (found) {
            resolve(employees[i]);
        } else {
            reject("Not found!");
        }
    })
};



/////Ex2//////////////////////////////////////////////////////////////////
/*
Crea una altra arrow function getSalary() similar a l'anterior
 que rebi com a paràmetre un objecte employee i retorni el seu
 salari.
*/

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let found = false;
        let i = 0;
        while (i < salaries.length && !found) {
            if (employee.id == salaries[i].id) {
                found = true;
            }
            if (!found) {
                i++;
            }
        }
        if (found) {
            resolve(salaries[i].salary);
        } else {
            reject("Not found!");
        }
    })
};
/* getSalary(employees[0])
    .then((result => console.log(result))); */



//Async / Await
//N2 E1

const triple = async (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 2000);
    })
};

const sumTriples = async (num1, num2) => {
    try {
        const triple1 = await triple(num1);
        const triple2 = await triple(num2);

        return (triple1 + triple2);
    } catch (e) {
        console.log('error');
    }
};

module.exports = {
    operation,
    getEmployee,
    getSalary,
    triple,
    sumTriples
};
