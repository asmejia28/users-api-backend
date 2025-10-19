# 🗄️ Proyecto Backend – Usuarios API

Este proyecto corresponde al **backend** de la aplicación de usuarios.  
Proporciona un conjunto básico de endpoints para gestionar datos de usuarios utilizando información generada con **[Mokaroo](https://www.mockaroo.com/)**.

---

## 🚀 Funcionalidades

- Endpoint para obtener todos los usuarios (`GET /usuarios`)
- Endpoint para registrar un nuevo usuario (`POST /usuarios`)
- Almacenamiento inicial basado en un archivo JSON con datos simulados desde Mokaroo.

---

## ⚙️ Tecnologías Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon) *(para desarrollo)*

---

## 📦 Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/usuarios-back-end.git
   cd usuarios-back-end

2. Instalar dependencias:

npm install

3. Ejecutar el servidor:

npm run dev

4. El backend se ejecutará por defecto en:

http://localhost:3000


## 🔗 Endpoints Disponibles

Método	      Ruta	        Descripción
GET	         /usuarios	    Obtiene todos los usuarios.
POST	     /usuarios	    Crea un nuevo usuario.

## 📁 Estructura del Proyecto

usuarios-api/
│
├── data/
│ └── users.js # Archivo con los datos iniciales (simulados desde Mokaroo)
│
├── index.js # Servidor principal con Express
├── package.json # Dependencias y scripts del proyecto
├── package-lock.json
└── README.md # Documentación del backend



## 📘 Ejemplo de Usuario

{  
  "id": 1,  
  "nombre": "Henriette Paddie",  
  "telefono": "408-887-8627", 
  "email": "hpaddie0@onmiure.com",  
  "direccion": "Suite 60",  
  "edad": 38,  
  "imagen": "https://randomuser.me/api/portraits/men/1.jpg"  
}

## 🧩 Notas

Los datos se almacenan temporalmente en memoria o en un archivo JSON.

Este backend está diseñado como API simulada para pruebas y desarrollo del frontend.

No se requiere base de datos.

## 👨‍💻 Autor

Desarrollado por Sofía Ocampo  
Proyecto académico – Parcial 2  
Ingeniería de Software 💻 | CIAF   
