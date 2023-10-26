CREATE TABLE lugaresfamosos (
        id bigint not null auto_increment,
        nombre varchar(255) not null,
        descripcion varchar(255) not null,
        imagen varchar(255) not null,
        pais_id bigint,

        primary key (id)
);