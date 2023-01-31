# ecom-react



## Installation

 - Paso 1: Instalar Paquetes.
```
npm install
```
 - Paso 2: Correr el servidor.


```
npm start

```

Nota: Si hay algun conflicto instalando mediante npm o yarn install, posiblemente sea un conflicto entre
ciertas librerias, en este caso SASS (sCSS), aunque hay varias soluciones a este problema, la mas rapida es lo siguiente:

1. Desinstalar el sass obsoleto, ya que es posible que al descargar el proyecto e instalar dependencias se cree con el node-sass que esta obsoleto *ya que funciona con versiones anteriores de node.
```
npm uninstall node-sass

```

2. Instalar la nueva libreria de sass.

```
npm install sass

```

*opcional: Tambien es posible resolver el problema con npm rebuild sass. O simplemente instalar una version de node siendo 12.0 o anteriores.
