<h1 align="center">Fundación Acción Restaurativa Argentina</h1>

<div align="center">
    <img src="https://github.com/user-attachments/assets/27b43531-4f94-4585-a4ce-9cf92fdece85" alt="FARA Logo" style="display: grid; place-items: center"/>
</div>

<h2>Descripción del Proyecto</h2>

**FARA Argentina:** Trabajamos para reparar el perjuicio causado por conflictos, promoviendo la justicia restaurativa, el bienestar y el desarrollo personal. Capacitaciones, publicaciones y más.

> [!NOTE]
> Para configurar y ejecutar este proyecto en tu entorno local, sigue las instrucciones detalladas en la documentación específica del **Backend** (Este documento) y [**Frontend**](https://github.com/Proyecto-Cilsa-Fara/Front_Cilsa_Fara-Web) respectivamente.

---

## Guía para instalación local

> [!NOTE]
> Si simplemente quieres probar el proyecto como una demo rápida, tienes nuestro [despliegue online de este proyecto frontend](https://fara.onrender.com/)

<details>
  <summary>Instalación usando git clone 🔧</summary>

### Cómo clonar el proyecto

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. **Clonar el repositorio**    
    Ejecuta el siguiente comando en tu terminal, reemplazando `URL_DEL_PROYECTO` por el enlace del proyecto:

```sh
git clone URL_DEL_PROYECTO
```

2. **OPCIONAL - Cambiar de rama**   
    Ejecuta el siguiente comando en tu terminal, reemplazando `RAMA` por la rama a utilizar:

```sh
git checkout RAMA
```

### Cómo instalar las dependencias del proyecto

1. Ejecuta el siguiente comando en tu terminal:

```sh
npm install
```

_Nota: Puedes utilizar otro package manager si así lo deseas; procura revisar las `Tecnologías principales` y también las `Librerías` para comprobar que son compatibles primero_

### Crear archivo `.env`

1. En la raíz del proyecto, crea un archivo llamado **.env**. Este archivo almacenará las variables de entorno utilizadas en el proyecto.
   
2. A continuación, define las variables de entorno necesarias para el proyecto. 

#### Ejemplo de archivo `.env`

Acomodar cada URL y puertos acorde a la configuración que se haya hecho al levantar el backend

```sh
NODE_ENV=development
DATABASE_URI = "URI-de-Mongo-DB"
PORT = 3000
SECRET_JWT_KEY = <Clave_secreta_para_MongoDB>
SALT_ROUNDS = 11
```

### Iniciar servidor (en modo `dev`)

```sh
npm run dev
```
</details>

<details>
  <summary>Instalación descargando comprimido ZIP 🔧</summary>

## Instalación descargando comprimido ZIP 🔧

### Cómo descargar el proyecto

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. **Descargar el proyecto en formato ZIP** 
    Ir a “code” > download ZIP

2. **Descomprimir el archivo**

3. **OPCIONAL - Cambiar de rama**   
    Ejecuta el siguiente comando en tu terminal, reemplazando `RAMA` por la rama a utilizar:

```sh
git checkout RAMA
```

### Cómo instalar las dependencias del proyecto

1. En la carpeta donde se encuentra “package.json” ejecutar en terminal:

```sh
npm install
```

_Nota: Puedes utilizar otro package manager si así lo deseas; procura revisar las `Tecnologías principales` y también las `Librerías` para comprobar que son compatibles primero_

### Crear archivo `.env`

1. En la raíz del proyecto, crea un archivo llamado **.env**. Este archivo almacenará las variables de entorno utilizadas en el proyecto.
   
2. A continuación, define las variables de entorno necesarias para el proyecto. 

#### Ejemplo de archivo `.env`

Acomodar cada URL y puertos acorde a la configuración que se haya hecho al levantar el backend

```sh
NODE_ENV=development
DATABASE_URI = "URI-de-Mongo-DB"
PORT = 3000
SECRET_JWT_KEY = <Clave_secreta_para_MongoDB>
SALT_ROUNDS = 11
```

### Iniciar servidor (en modo `dev`)

```sh
npm run dev
```
</details>


---

<details>
    <summary><h2>👨‍👩‍👧‍👦 Equipo de Desarrollo</h2></summary>
    <table align="center">
        <tr>
            <td><b>Denisse Amaya</b></td>
            <td>UX-UI Designer</td>
            <td align="center"><a href="https://github.com/DeniiAmaya">@DeniiAmaya</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/denis-amaya-410075138/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Agostina Borroni</b></td>
            <td>LEAD UX-UI Designer</td>
            <td align="center"><a href="https://github.com/agosborroni">@agosborroni</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/agostina-paz-borroni-914249145/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Daiana Colquicocha</b></td>
            <td>Backend Developer</td>
            <td align="center"><a href="https://github.com/DaiColqui">@DaiColqui</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/daicolqui/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Matías Díaz</b></td>
            <td>Frontend Developer</td>
            <td align="center"><a href="https://github.com/mati98ld">@mati98ld</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/matildiaz/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Gerónimo Franco</b></td>
            <td>QA Tester</td>
            <td align="center"><a href="https://github.com/Geronimo9321">@Geronimo9321</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/geronimo-ariel-franco-programador-tester/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Leonel Giralde</b></td>
            <td>Frontend Developer</td>
            <td align="center"><a href="https://github.com/LeonelGiralde">@LeonelGiralde</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/leonel-giralde/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Octavio Godoy</b></td>
            <td>UX-UI Designer</td>
            <td align="center"><a href="https://github.com/octa13">@octa13</a></td>
            <td align="center"><a href="https://www.linkedin.com/in//"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Sandra Ibarra</b></td>
            <td>QA tester</td>
            <td align="center"><a href="https://github.com/sandrayaquelineibarra">@sandrayaquelineibarra</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/sandra-ibarra-023b7720/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Mariano Infante</b></td>
            <td>LEAD QA Tester</td>
            <td align="center"><a href="https://github.com/MGIC12">@MGIC12</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/mariano-infante/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Franco Lopez</b></td>
            <td>Frontend Developer</td>
            <td align="center"><a href="https://github.com/Lfran92">@Lfran92</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/lopez-franco/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Nicolás Martín</b></td>
            <td>Backend Developer</td>
            <td align="center"><a href="https://github.com/nicolasmartin89">@nicolasmartin89</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/nicolas-demis-martin/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Facundo Javier Pacheco Escalante</b></td>
            <td>QA Tester</td>
            <td align="center"><a href="https://github.com/javi321321">@Javi321321</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/facundopacheco/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Ricardo Ramos</b></td>
            <td>Backend Developer</td>
            <td align="center"><a href="https://github.com/elequipoderiki">@elequipoderiki</a></td>
            <td align="center"><a href="https://www.linkedin.com/in//"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Ricardo Rolón</b></td>
            <td>QA Tester</td>
            <td align="center"><a href="https://github.com/RolRic">@RolRic</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/ricardo-rolon2023/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Daniela Salvo</b></td>
            <td>QA Tester</td>
            <td align="center"><a href="https://github.com/DanipSal">@DanipSal</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/danisalvo/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Ian Sosa</b></td>
            <td>TECH LEAD</td>
            <td align="center"><a href="https://github.com/sosaian">@sosaian</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/sosaian/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Brenda Tanoni</b></td>
            <td>QA Tester</td>
            <td align="center"><a href="https://github.com/tanonibrenda">@tanonibrenda</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/brenda-yohena-tanoni-82430146/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Laura Yachelini</b></td>
            <td>Frontend Developer</td>
            <td align="center"><a href="https://github.com/LauYache">@LauYache</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/lauyache/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
        <tr>
            <td><b>Tomás Zucchi</b></td>
            <td>Backend Developer</td>
            <td align="center"><a href="https://github.com/TomasZucchi">@TomasZucchi</a></td>
            <td align="center"><a href="https://www.linkedin.com/in/tomaszucchi/"><img src="https://github.com/user-attachments/assets/165473a1-ce2f-49c6-81b7-a0639b29e4c7" alt="LinkedIn logo" /></a></td>
        </tr>
    </table>
</details>

---

## Aprendizajes del proyecto

En este proyecto, el equipo adquirió experiencia en las siguientes áreas:

*   **Gestión de repositorios complejos con Git:** Se implementó un flujo de trabajo robusto utilizando diversas ramas (branches) y solicitudes de extracción (pull requests) para garantizar la transparencia y el control de versiones durante todo el desarrollo.
*   **Trabajo con equipos de QA Testing:** Se ajustaron aspectos del diseño de los componentes en base al feedback de nuestro equipo de QA Testing, usando Postman en este caso.
*   **Colaboración con metodologías ágiles:** Se aplicaron metodologías ágiles como Scrum, utilizando herramientas de gestión de proyectos como Jira y Trello para la planificación, seguimiento y gestión de tareas.

---

## Tecnologías principales:

⚙ Node Js - para hacer uso de `npm` (v22.14.0 LTS al momento de este commit)

⚙ Express Js (v4.21.2 al momento de este commit)

⚙ JWT (v9.0.2 al momento de este commit)

⚙ MongoDB (v6.14.2 al momento de este commit)

⚙ Swagger - para documentación dinámica

⚙ Metodologías ágiles de trabajo - SCRUM usando Trello

---

## Librerias:

Para que el proyecto se logre realizar de una manera esperada se utlizaron las siguientes herramientas:

📚 CORS

📚 Mongoose

📚 BcryptJS

📚 Cookie-parser

📚 Swagger-jsdoc

📚 Swagger-ui-express

📚 Multer

---

### Nota Final
Este proyecto fue desarrollado durante una práctica laboral organizada por CILSA en colaboración con FARA, por un equipo multidisciplinario inclusivo que aboga por la accesibilidad web.

<a href="https://git.io/typing-svg" align="center"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&duration=1000&pause=1000&color=F2F2F2&background=12121200&center=true&vCenter=true&width=435&lines=FARA;CILSA;Backend" alt="Typing SVG"  style="width: 100vw" /></a>
