CREATE TABLE usuario_administrador (
        id bigint auto_increment primary key,
        email varchar(300) not null unique,
        contrasena varchar(300) not null  ##se va a utilizar el algoritmo hash
);