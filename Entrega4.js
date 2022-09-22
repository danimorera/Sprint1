//Nivell 1
/////Ex1//////////////////////////////////////////////////////////////////
/* Crea una funció asíncrona que rebi un id d'empleat/da i 
imprimeixi per pantalla el nom de l'empleat/da i el seu salari, 
usant les funcions getEmployee() i getSalary() que has definit 
a la tasca anterior.
 */
/////Ex2//////////////////////////////////////////////////////////////////
/*
Crea una nova funció asíncrona que cridi a una altra que retorni una 
Promise que efectuï la seva funció resolve() després de 2 segons de la 
seva invocació.
*/

//Nivell 2
/////Ex1//////////////////////////////////////////////////////////////////
/* Crea una funció que retorni el doble del número que li passa com a 
paràmetre després de 2 segons. */

function double(num) {
    setTimeout(() => {
        return (num * 2);
    }, 2000)
}



/* 
Crea una altra funció que rebi tres números i calculi la suma dels seus 
dobles fent servir la funció anterior.
 */



/////Ex2//////////////////////////////////////////////////////////////////


//Nivell 3
/////Ex1//////////////////////////////////////////////////////////////////
/* Força i captura tants errors com puguis dels nivells 1 i 2. */