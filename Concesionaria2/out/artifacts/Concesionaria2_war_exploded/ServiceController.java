package mx.utez.edu.Concesionaria2.controller;


import mx.utez.edu.Concesionaria2.documentos.Servicios;
import mx.utez.edu.Concesionaria2.repository.ServicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/servicio")
public class ServiceController {
    @Autowired
    private ServicioRepository servicioRepository;

    @PostMapping("/post")
    public ResponseEntity<?> postServicio(@RequestBody Servicios servicio){
        try {
            Servicios servicioSave = servicioRepository.save(servicio);
            return new ResponseEntity<Servicios>(servicioSave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllServicio(){
        try {
            List<Servicios> serviciosFindAll = servicioRepository.findAll();
            return new ResponseEntity<List<Servicios>>(serviciosFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getServicioById(@PathVariable int id){
        try {
            Servicios servicioFindById = servicioRepository.findById(id).get();
            return new ResponseEntity<Servicios>(servicioFindById, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putServicio(@RequestBody Servicios servicio){
        try {
            Servicios servicioSave = servicioRepository.save(servicio);
            return new ResponseEntity<Servicios>(servicioSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteServicio(@PathVariable int id){
        try {
            servicioRepository.deleteById(id);
            return new ResponseEntity<String>("Servicio eliminado", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
