CREATE TABLE hoteles (
         id bigint auto_increment PRIMARY KEY not null ,
         nombre_hotel varchar(255) not null,
         valoracion float not null,
         imagen_hotel varchar(500) not null,
         pais_id bigint
);