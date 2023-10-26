CREATE TABLE paises (
        pais_id bigint not null auto_increment,
        nombre varchar(255) not null,
        descripcion varchar(255) not null,
        continente varchar(255) not null,
        bandera varchar(255) not null,
        imagen1 varchar(500) not null,
        imagen2 varchar(500) not null,
        primary key(pais_id)

);