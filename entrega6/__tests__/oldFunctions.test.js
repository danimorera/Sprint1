const {
    operation,
    getEmployee,
    getSalary,
    triple,
    sumTriples
} = require('../app/oldFunctions.js');


/////Nv.1/////////////////////////////////////////////////////////////////
describe('Call & Prom N1 Ex2', () => {
    test('Basic test for Call & Prom N1 Ex2', () => {
        expect(operation(3, (x) => {
            x >= 0 ? result = "Positiu o 0" : result = "Negatiu";
            return (result)
        })).toBe('Positiu o 0');
    });
})

describe('Call & Prom N2', () => {
    test('Basic test for getEmployee', () => {
        getEmployee(1).then((result) => { expect(result.id).toBe(1) })
        getEmployee(1).then((result) => { expect(result.name).toBe('Linux Torvalds') })
    });
    test('Basic test for getSalary', () => {
        return expect(getEmployee(1)
            .then(obEmpl => getSalary(obEmpl)
                .then(obSalary => obSalary))).resolves.toBe(4000);
    });
});

describe('Async/Await N2 Ex1.', () => {
    test('Basic test for triple', async () => {
        expect(await triple(2)).toBe(6);
    });
    test('Input test for triple', async () => {
        expect(await triple('o')).toBeNaN();
    });
    test('Basic test for sumTriples', async () => {
        expect(await sumTriples(2, 2)).toBe(12);
    });
    test('Input test for sumTriples', async () => {
        expect(await sumTriples('o', 0)).toBeNaN();
    });
});

////Nv.2/////////////////////////////////////////////////////////////////

/* Verifica mitjançant tests l'execució de l'exercici Async / Await 
N2 E1 utilitzant Jest Fake Timers. */
/* jest.useFakeTimers();

describe('Jest Fake Timer Async/Await N2 Ex1.', () => {
    test('waits 2 second before returning the double', () => {
        
        jest.spyOn(console, 'setTimeout');
        triple(2)
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });
}); */
/*
Crea un mock que comprovi les crides al constructor de la classe Persona i
al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i
testeja que funcionen.
*/


/*
Verifica mitjançant tests la creació d'instàncies de la classe abstracta de 
l'exercici Classes & Arrow Functions N3 E1.
*/