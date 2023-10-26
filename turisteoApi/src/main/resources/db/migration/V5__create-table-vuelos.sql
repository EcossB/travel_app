CREATE TABLE vuelos (
            id bigint not null primary key auto_increment,
            link_vuelos varchar(500) not null,
            pais_id bigint not null
);