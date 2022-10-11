const {
    myPromise,
    operation,
    getEmployee,
    getSalary
  } = require('./entrega3')

//Nivell 1
/////Ex1//////////////////////////////////////////////////////////////////
/* Crea una funció asíncrona que rebi un id d'empleat/da i 
imprimeixi per pantalla el nom de l'empleat/da i el seu salari, 
usant les funcions getEmployee() i getSalary() que has definit 
a la tasca anterior.
 */

const getEmpAsync = async (id) => {
    try {
        const empName = await getEmployee(id);
        const empSal = await getSalary(empName);

        return (console.log(`${empName.name}, ${empSal}`));
    } catch (e) {
        console.log('error');
    }
};

/////Ex2//////////////////////////////////////////////////////////////////
/*
Crea una nova funció asíncrona que cridi a una altra que retorni una 
Promise que efectuï la seva funció resolve() després de 2 segons de la 
seva invocació.
*/

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

//Nivell 2
/////Ex1//////////////////////////////////////////////////////////////////
/* Crea una funció que retorni el doble del número que li passa com a 
paràmetre després de 2 segons. */

const double = async (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 2)
        }, 2000);
    })
};
double(2).then(result => {
    console.log(result);
});

/* 
Crea una altra funció que rebi tres números i calculi la suma dels seus 
dobles fent servir la funció anterior.
 */

const sumDoubles = async (num1, num2, num3) => {
    try {
        const double1 = await double(num1);
        const double2 = await double(num2);
        const double3 = await double(num3);

        return (double1 + double2 + double3);
    } catch (e) {
        console.log('error');
    }
};
sumDoubles(2, 2, 2).then(result => {
    console.log(result);
});

//Nivell 3
/////Ex1//////////////////////////////////////////////////////////////////
/* Força i captura tants errors com puguis dels nivells 1 i 2. */