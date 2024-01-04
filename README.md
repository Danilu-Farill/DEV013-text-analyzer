# BIENVENIDO A TEXT ANALIZER

## Instrucciones

¿En qué consiste este analizador de texto? Como su nombre lo dice, consiste en analizar el texto que el usuario escribe dentro del cuadro de texto, el analizador realiza los siguiente:

## Funcionabilidad

+ Cuenta la **cantidad de palabras** que ingresas, ejemplo: _Hola mundo (dos palabras)_.

+ Cuenta la **cantidad de caracteres** es decir las letras de manera individual, signos, espacios, etc., ejemplo: _Hola mundo (10 caracteres)_.

+ Cuenta la **cantidad de caracteres sin los espacios**, aquí te cuenta las letras de manera individual, sin espacios y sin signos de puntuación, ejemplo: _Hola mundo?(9 caracteres)_.

+ Cuenta la **cantidad de números**, numeros de dos o mas digitos se cuentan como uno, incluso los números decimales, no se cuentan números dentro de texto, ejemplo: _Hola m0ndo 41 1.2.(dos números)_.

+ Da la **suma de los números en el texto**, suma de más de dos digitos, decimales, ignora numeros en texto, ejemplo: _hola m4nd0 41 1.2.(el resultado es 42.2)_.

+ **Longitud media de las palabras**, aquí en el texto se suman los caracteres sin espacio y se dividen por la cantidad de palabras, ejemplo: _hola mundo(da 4.5)_.

### Archivos utilizados

***STYLE.CSS***
Aquí realice la alineación del texto, puesto en html, entre los estilos estan el tamaño de la letra, color, fondo y centrado del contenido.

***INDEX.HTML***
Este es el archivo que se encarga de la estructura, es el archivo principal del cual se encargan de estraer las etiquetas necesarias para trabajar el CSS y  JavaScript.

***INDEX.JS***
Aqui trabaje el JS con modulos, en este apartado se llama al input donde se va a escribir, el botón que elimina todo y las listas en donde se va a escribir lo que quiero que realice mi función en base al texto escrito.

***ANALYZER.JS***
Esta es el segundo archivo del JS con modulos, aquí me encargue de hacer que las funciones hicieran lo que requiere la aplicación, el conteo de palabras, caraccteres, números, etc.

### Diseño

Para el diseño del analizador use como fondo la combinación de dos colores que me gusto el como se combinan entre ellos, para el título utilice un color y tamaño que fuera más grande y llamativo que lo demás para que resaltara el proposito de esta página.

**El cuadro** tiene en el interior de un texto que indica donde escribir y que se borra cuando el usuario empieza a escribir, el cuadro tiene las esquinas redondeadas solo un poco para que no afecte al texto interno, el cuadro se puede agrandar o hacer pequeño a voluntad del usuario, el fondo del cuadro es un poco degradado para que no se vea muy fuerte y el texto es un color oscuro para distinguirlo.

El botón de **limpiar caja** tiene un color más fuerte para que lo noten con facilidad, puse el puntero del mouse como manita para que se distinga donde dar clic.

Las líneas donde se encuentran los nombres de lo que contabiliza el texto estan en color morado con transparencia para no afectar la visibilidad de los números que se van mostrando, con borde redondeado que no afecta el contenido.

**En el pie de página** coloqué mi nombre a la derecha para que no afecta la atención de lo demás, con opacidad para no resaltar demasiado, que solo se vea sutil.

#### ¿Dónde puede abrirse?
Esta aplicación es apta para usarse en cualquier navegador, ya sea firefox, chrome, edge, safari y para abrirlo en cualquier aparato electrónico, computadora, laptop, telefono, celular.
