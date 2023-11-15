CREATE TABLE usuarios (
        id bigint auto_increment primary key,
        nombre varchar(250) not null,
        apellido varchar(250) not null,
        email varchar(300) not null unique,
        contrasena varchar(300) not null  ##se va a utilizar el algoritmo hash
);