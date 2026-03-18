# Rick and Morty: Memory Game

# ENFOQUE DEL DESARROLLO

Experiencia del Usuario (UX): Diseñado en la experiencia de usuario, permitiendo que al hacer uso del juego el usuario disfrute de cada elemento visual e iteración que esta teniendo con el sistema. siendo de esta manera un juego intuitivo, fluido y entretenido.

Practica Técnica: Este repositorio es una demostración práctica de mis capacidades técnicas, donde aplico patrones de diseño,lógica y las mejores prácticas de desarrollo haciendo uso del framework React.

# DECISIONES TÉCNICAS Y RAZONAMIENTO

Para la construcción de este proyecto, se tomaron decisiones orientadas a la velocidad de desarrollo, la seguridad de tipos y la ligereza del bundle final.

# STAXK PRINCIPAL:

-React + TypeScript + Vite =

Vite: Se eligió como build tool por su velocidad superior y su eficiencia al generar el build final, superando notablemente a alternativas tradicionales como Create React App que ademas ya no se usa realmente en la practica.

TypeScript: Implementado para garantizar un código robusto. El uso de interfaces para los datos de la Rick and Morty API permite reducir errores en tiempo de ejecución y mejorar la experiencia de desarrollo, con el tipado estricto Se definieron tipos personalizados para los personajes, asegurando que cada carta consumida desde la API cumpla con la estructura necesaria para el juego y la logica del codigo.

-Axios =

Apesar de poder usar un fetch nativo, se instaló Axios por su capacidad de manejar instancias personalizadas, su transformación automática de datos JSON y una gestión de errores más intuitiva

# UX

Para brindarle al usuario una experiencia de manera orgánica y divertida, se integró react-confetti que se ejecuta a al hora de terminar celebrando su finalización en el juego. Es una librería ligera que aporta un feedback visual inmediato y satisfactorio para el usuario sin comprometer el rendimiento.

# LOGIN

Teniendo en cuenta que es un demo y un test técnico, para el login se crearon validaciones básicas de regex y de campo, asegurando que exista informacion, y con la estructura esperada.Comparando la informacion ingresada con datos fijos del código y en el escenario de ser correctos generar un token de manera ramdon y permitiendo el acceso al resto del sistema simulando asi toda la experiencia de autenticación.

# INSTALACIÓN

Instrucciones rápidas para correr el proyecto en local:

1. Clona el repo: `git clone https://github.com/Luisa-Maria/foris-test.git`
2. Instala dependencias: `npm install` (o el comando que uses).
3. Corre el juego: `npm run dev`
4. CRedenciales de acceso : prueba@test.com - 1234
