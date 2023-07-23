# Proyecto FullStack

## Objetivo
Crear una aplicación que ayude a obtener una lista de usuarios y
muestre la información de sus perfiles, explotando el API Rest pública de
GitHub https://api.github.com/search/users?q=YOUR_NAME.

# Pruebas en local
1. Instalar librerías para backend: npm install 
2. Ingresar a la carpeta cliente, corresponde al Frontend:  cd client 
3. Instalar librerías para Frontend: npm install

## Iniciar Backend

- El proyecto cuenta con nodemon
- Se toma localhost puerto 4000

Para iniciar: npm run dev

## inciar Frontend

1. Ingresar a la carpeta cliente y ejecutar: npm run start

## Base de datos

- Creada en Postgres, bajo la siguiente estructura

CREATE DATABASE usersdb;

CREATE TABLE usergit(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL UNIQUE ,
    userid VARCHAR(255) NOT NULL,
    followers INTEGER
);

# Notas adicionales

Pruebas Unitarias realizadas en Frontend:
Componentes:
- Button
- Cards
- ContainerEmpty
- NotificationMessageModal

Page:
- Home

## Archivo .env

No se excluye archivo .env para que sea conocida la estructura del mismo para pruebas locales en la Base de datos.