package mx.utez.edu.Concesionaria2.controller;

import mx.utez.edu.Concesionaria2.documentos.Ventas;
import mx.utez.edu.Concesionaria2.repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/venta")
public class VentasController {
    @Autowired
    private VentaRepository ventaRepository;

    @PostMapping("/post")
    public ResponseEntity<?> postVenta(@RequestBody Ventas venta){
        try {
            Ventas ventaSave = ventaRepository.save(venta);
            return new ResponseEntity<Ventas>(ventaSave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllVenta(){
        try {
            List<Ventas> ventasFindAll = ventaRepository.findAll();
            return new ResponseEntity<List<Ventas>>(ventasFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getVentaById(@PathVariable int id){
        try {
            Ventas ventaFindById = ventaRepository.findById(id).get();
            return new ResponseEntity<Ventas>(ventaFindById, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putVenta(@RequestBody Ventas venta){
        try {
            Ventas ventaSave = ventaRepository.save(venta);
            return new ResponseEntity<Ventas>(ventaSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVenta(@PathVariable int id){
        try {
            ventaRepository.deleteById(id);
            return new ResponseEntity<String>("Venta eliminada", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


