package mx.utez.edu.Concesionaria2.controller;

import mx.utez.edu.Concesionaria2.documentos.Empleados;
import mx.utez.edu.Concesionaria2.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/empleado")
public class EmployController {
    @Autowired
    private EmpleadoRepository empleadoRepository;


    @PostMapping("/post")
    public ResponseEntity<?> postEmpleado(@RequestBody Empleados empleado){
    try{
        Empleados empleadoSave = empleadoRepository.save(empleado);
        return ResponseEntity.ok(empleadoSave);
    } catch (Exception e) {
        return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllEmpleado() {
        try {
            List<Empleados> empleadosFindAll = empleadoRepository.findAll();
            return new ResponseEntity<List<Empleados>>(empleadosFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getEmpleadoById(@PathVariable int id){
        try{
            Empleados empleadoFindById = empleadoRepository.findById(id).get();
            return new ResponseEntity<Empleados>(empleadoFindById, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putEmpleado(@RequestBody Empleados empleado){
        try {
            Empleados empleadoSave = empleadoRepository.save(empleado);
            return new ResponseEntity<Empleados>(empleadoSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmpleado(@PathVariable int id){
        try {
            empleadoRepository.deleteById(id);
            return new ResponseEntity<String>("Empleado eliminado", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
