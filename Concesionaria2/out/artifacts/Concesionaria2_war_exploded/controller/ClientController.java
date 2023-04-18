package mx.utez.edu.Concesionaria2.controller;


import mx.utez.edu.Concesionaria2.documentos.Clientes;
import mx.utez.edu.Concesionaria2.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cliente")
public class ClientController {

    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping("/post")
    public ResponseEntity<?> postCliente(@RequestBody Clientes cliente){
        try {
            Clientes clienteSave = clienteRepository.save(cliente);
            return new ResponseEntity<Clientes>(clienteSave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllCliente(){
        try {
            List<Clientes> clientesFindAll = clienteRepository.findAll();
            return new ResponseEntity<List<Clientes>>(clientesFindAll, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getClienteById(@PathVariable int id){
        try{
        Clientes clienteFindById = clienteRepository.findById(id).get();
        return new ResponseEntity<Clientes>(clienteFindById, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<?> putCliente(@RequestBody Clientes cliente){
        try {
            Clientes clienteSave = clienteRepository.save(cliente);
            return new ResponseEntity<Clientes>(clienteSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCliente(@PathVariable int id){
        try {
            clienteRepository.deleteById(id);
            return new ResponseEntity<String>("Cliente eliminado", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
