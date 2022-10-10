const util = require('node:util');
const fs = require('node:fs');
const zlib = require('zlib');
const { exec } = require('child_process')

//Nivell 1
/////Ex1//////////////////////////////////////////////////////////////////
/*Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/


function writeSentence() {
    fs.appendFile('fitxer1.txt', 'Nova frase', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    })
};

//writeSentence()


/////Ex2//////////////////////////////////////////////////////////////////
/*Crea una altra funció que mostri per consola el contingut del fitxer de 
l'exercici anterior.*/

function show() {
    fs.readFile('./fitxer1.txt', (error, data) => {
        if (error) {
            throw error;
        }
        console.log(data.toString());
    });
};

//show()


/////Ex3//////////////////////////////////////////////////////////////////
/*Crea una funció que comprimeixi el fitxer del nivell 1.*/

function compress() {
    const gzip = zlib.createGzip();
    const inp = fs.createReadStream('./fitxer1.txt');
    const out = fs.createWriteStream('fitxerComprimit.txt.zip');
    inp.pipe(gzip).pipe(out);
    console.log("Arxiu comprimit correctament");
};

//compress()

/* function decompress() {
    const unzip = zlib.createUnzip(); 
    const inp = fs.createReadStream('fitxerComprimit.txt.zip');
    const out = fs.createWriteStream('./fitxerDescomprimit.txt');
    inp.pipe(unzip).pipe(out);
}; 

decompress()
*/

//Nivell 2

/////Ex1//////////////////////////////////////////////////////////////////
/* Crea una funció que imprimeixi recursivament un missatge per la
consola amb demores d'un segon.
 */
const recursiveMessage = (message) => {
    setInterval(() => console.log(message), 1000)
}
//recursiveMessage('Missatge recursiu')

/////Ex2//////////////////////////////////////////////////////////////////
/* Crea una funció que llisti per la consola el contingut del directori
d'usuari/ària de l'ordinador utilizant Node Child Processes. */

function listUserDir() {
    exec('ls ~', (error, stdout, stderr) => {
        if (error) {
            console.log(`error :${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr :${stderr}`);
            return;
        }
        console.log(`stdout:\n${stdout}`)
    });
};

//listUserDir();


//Nivell 3
/////Ex1//////////////////////////////////////////////////////////////////
/*
Crea una funció que creï dos fitxers codificats en hexadecimal i en 
base64 respectivament, a partir del fitxer del nivell 1.
Crea una funció que guardi els fitxers del punt anterior, ara 
encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
Crea una altra funció que desencripti i descodifiqui els fitxers de 
l'apartat anterior tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part.
*/