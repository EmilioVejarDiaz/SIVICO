package mx.utez.edu.Concesionaria2.controller;


import mx.utez.edu.Concesionaria2.documentos.Sucursales;
import mx.utez.edu.Concesionaria2.repository.SucursalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/sucursal")
public class SucursalController {
    @Autowired
private SucursalRepository sucursalRepository;
    @PostMapping("/post")
    public ResponseEntity<?> postVenta(@RequestBody Sucursales Sucursal){
        try {
            Sucursales sucursalSave = sucursalRepository.save(Sucursal);
            return ResponseEntity.ok(sucursalSave);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getCause().toString());
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllVenta(){
        try {
            List<Sucursales> sucursalesFindAll = sucursalRepository.findAll();
            return new ResponseEntity<List<Sucursales>>(sucursalesFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getSucursalById(@PathVariable int id){
        try{
            Sucursales sucursalFindById = sucursalRepository.findById(id).get();
            return new ResponseEntity<Sucursales>(sucursalFindById, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putSucursal(@RequestBody Sucursales sucursal){
        try {
            Sucursales sucursalSave = sucursalRepository.save(sucursal);
            return new ResponseEntity<Sucursales>(sucursalSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSucursal(@PathVariable int id){
        try {
            sucursalRepository.deleteById(id);
            return new ResponseEntity<String>("Sucursal eliminada", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
