package mx.utez.edu.Concesionaria2.repository;

import mx.utez.edu.Concesionaria2.documentos.Servicios;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicioRepository extends MongoRepository<Servicios, Integer> {
}
