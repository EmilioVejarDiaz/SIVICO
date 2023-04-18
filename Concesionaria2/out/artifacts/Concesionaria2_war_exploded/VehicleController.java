package mx.utez.edu.Concesionaria2.controller;


import mx.utez.edu.Concesionaria2.documentos.Vehiculos;
import mx.utez.edu.Concesionaria2.repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/vehiculo")
public class VehicleController {
    @Autowired
    private VehiculoRepository vehiculoRepository;

    @PostMapping("/post")
    public ResponseEntity<?> postVehiculo(@RequestBody Vehiculos vehiculo){
        try {
            Vehiculos vehiculoSave = vehiculoRepository.save(vehiculo);
            return new ResponseEntity<Vehiculos>(vehiculoSave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllVehiculo(){
        try {
            List<Vehiculos> vehiculosFindAll = vehiculoRepository.findAll();
            return new ResponseEntity<List<Vehiculos>>(vehiculosFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getVentaById(@PathVariable int id){
        try{
            Vehiculos vehiculoFindById = vehiculoRepository.findById(id).get();
            return new ResponseEntity<Vehiculos>(vehiculoFindById, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putVehiculo(@RequestBody Vehiculos vehiculo){
        try {
            Vehiculos vehiculoSave = vehiculoRepository.save(vehiculo);
            return new ResponseEntity<Vehiculos>(vehiculoSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVehiculo(@PathVariable int id){
        try {
            vehiculoRepository.deleteById(id);
            return new ResponseEntity<String>("Vehiculo eliminado", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
