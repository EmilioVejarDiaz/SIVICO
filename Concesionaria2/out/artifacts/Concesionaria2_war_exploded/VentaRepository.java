package mx.utez.edu.Concesionaria2.repository;

import mx.utez.edu.Concesionaria2.documentos.Ventas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface VentaRepository extends MongoRepository<Ventas, Integer> {





}
