###Instructions

Inicialitzar el gestor de paquets:
npm init
    Opcionalment, podem afegir el flag -y per respondre sí a totes les preguntes inicials de manera automàtica:
    npm init -y

Instal·lació de jest:
npm install jest -D
El flag -D indica que jest serà part del nostre entorn de desenvolupament.

Comprobar l'objecte scripts dins del package.json per veure l'alias de jest. Opció de modificarlo amb --verbose per exemple.


Crear un nou objecte dins del package.json per indicar estem en entorn servidor:
  "jest": {
    "testEnvironment": "node"
  }

Desde el directori on hem iniciatlizat el gestor de paquets,
podem iniciar els tests tant amb l'alias "test" com amb el comandament "jest":

npm test = npm jest