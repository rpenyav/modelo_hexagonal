# Proyecto React con Arquitectura Hexagonal

Este proyecto implementa una aplicación React utilizando la Arquitectura Hexagonal (también conocida como Arquitectura de Puertos y Adaptadores). Esta arquitectura se centra en mantener una clara separación de responsabilidades, facilitando la mantenibilidad, escalabilidad y testabilidad del código.

## Tabla de Contenidos

- Estructura del Proyecto
- Dependencias
- Descripción de la Arquitectura Hexagonal
  - Núcleo de Dominio
  - Aplicación
  - Adaptadores
  - Configuración
- Contexto de Autenticación
- Estilos SCSS
- Instalación
- Uso

## Estructura del Proyecto

```
my-app/
├── public/
├── src/
│   ├── adapters/
│   │   ├── http/
│   │   ├── ui/
│   │   │   ├── Login.tsx
│   │   │   ├── Login.scss
│   │   │   ├── PrivateRoute.tsx
│   │   │   ├── PublicRoute.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Dashboard.scss
│   │   ├── persistence/
│   │       ├── UserLocalStorageRepository.ts
│   ├── application/
│   │   ├── services/
│   │       ├── AuthService.ts
│   │   ├── usecases/
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── User.ts
│   │   ├── repositories/
│   │       ├── IUserRepository.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   ├── config/
│   ├── App.tsx
│   ├── App.scss
│   ├── index.tsx
├── .env
├── package.json
├── tsconfig.json
├── README.md

```

### Dependencias

- react
- react-dom
- react-router-dom
- typescript
- axios
- node-sass
- jwt-decode

### Descripción de la Arquitectura Hexagonal

La Arquitectura Hexagonal se organiza en tres capas principales:

- Núcleo de Dominio, Aplicación y Adaptadores.

Cada capa tiene responsabilidades específicas y está diseñada para interactuar con las otras capas a través de interfaces bien definidas.

### Núcleo de Dominio

El Núcleo de Dominio contiene la lógica de negocio y las entidades principales del sistema. Esta capa es independiente de las tecnologías y frameworks utilizados.

### Aplicación

La capa de Aplicación contiene los servicios que coordinan las operaciones del dominio. Esta capa orquesta las llamadas a los repositorios y otros servicios.

### Adaptadores

Los Adaptadores permiten que el Núcleo de Dominio interactúe con el mundo exterior, incluyendo interfaces de usuario, bases de datos y otros sistemas.

### Instalación

Clona el repositorio:

```
git clone <repositorio-url>
cd my-app
```

Instala las dependencias:

```
npm install
```

Configura el archivo .env con la URL de la API:

```
REACT_APP_API_URL=https://backend-pet-f88813090b40.herokuapp.com
```

### Uso

Inicia la aplicación:

```
npm start
```

Abre http://localhost:3000 en tu navegador.

Utiliza las credenciales de inicio de sesión para acceder al dashboard.
