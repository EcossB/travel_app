ALTER TABLE lugaresfamosos ADD FOREIGN KEY (pais_id) REFERENCES paises (pais_id);

ALTER TABLE gastronomia ADD FOREIGN KEY (pais_id) REFERENCES paises (pais_id);

ALTER TABLE vuelos ADD FOREIGN KEY (pais_id) REFERENCES paises (pais_id);

ALTER TABLE hoteles ADD FOREIGN KEY (pais_id) REFERENCES paises (pais_id);