package mx.utez.edu.Concesionaria2.controller;


import mx.utez.edu.Concesionaria2.documentos.Proveedores;
import mx.utez.edu.Concesionaria2.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/proveedor")
public class ProviderController {

    @Autowired
    private ProveedorRepository proveedorRepository;

    @PostMapping("/post")
    public ResponseEntity<?> postProveedor(@RequestBody Proveedores proveedor){
        try {
            Proveedores proveedorSave = proveedorRepository.save(proveedor);
            return new ResponseEntity<Proveedores>(proveedorSave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllProveedor(){
        try {
            List<Proveedores> proveedoresFindAll = proveedorRepository.findAll();
            return new ResponseEntity<List<Proveedores>>(proveedoresFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getProveedorById(@PathVariable int id){
        try{
        Proveedores proveedorFindById = proveedorRepository.findById(id).get();
        return new ResponseEntity<Proveedores>(proveedorFindById, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putProveedor(@RequestBody Proveedores proveedor){
        try {
            Proveedores proveedorSave = proveedorRepository.save(proveedor);
            return new ResponseEntity<Proveedores>(proveedorSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProveedor(@PathVariable int id){
        try {
            proveedorRepository.deleteById(id);
            return new ResponseEntity<String>("Proveedor eliminado", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
