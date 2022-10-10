const oldFun = require('../app/oldFunctions.js');

test('test de getEmployee', () => {
    expect(oldFun.getEmployee(1).id).toBe('1'); //esta retornant undefine        expect(oldFun.getEmployee(1).name).toBe('Linux Torvalds');
    expect(oldFun.getEmployee(1) && typeof oldFun.getEmployee(1) === 'object').toBe(true)
    expect(oldFun.getEmployee(1).id).toBe(oldFun.employees[0]);
});
    
    /* test('test de getSalary', () => {
    
        expect(oldFun.getSalary(oldFun.getEmployee(1))).toBe(4000);
    
    }); */
        //afegir una que comprobi el tipof que retorna--salary retorna promesa
        //altre amb el metode.then