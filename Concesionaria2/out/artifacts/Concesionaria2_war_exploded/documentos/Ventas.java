package mx.utez.edu.Concesionaria2.documentos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "Ventas")
public class Ventas {
    @MongoId
    private int id;
    private String nombreCliente;
    private String nombreEmpleado;
    private int idVehiculo;
    private long cantidadPagada;
    private String fechaTransaccion;

    @DBRef
    private Vehiculos vehiculo;  // Referencia al documento embebido


    public Ventas(int id, String nombreCliente, String nombreEmpleado, int idVehiculo, long cantidadPagada, String fechaTransaccion, Vehiculos vehiculo) {
        this.id = id;
        this.nombreCliente = nombreCliente;
        this.nombreEmpleado = nombreEmpleado;
        this.idVehiculo = idVehiculo;
        this.cantidadPagada = cantidadPagada;
        this.fechaTransaccion = fechaTransaccion;
        this.vehiculo = vehiculo;
    }

    public Vehiculos getVehiculo() {
        return vehiculo;
    }

    public void setVehiculo(Vehiculos vehiculo) {
        this.vehiculo = vehiculo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getNombreEmpleado() {
        return nombreEmpleado;
    }

    public void setNombreEmpleado(String nombreEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
    }

    public int getIdVehiculo() {
        return idVehiculo;
    }

    public void setIdVehiculo(int idVehiculo) {
        this.idVehiculo = idVehiculo;
    }

    public long getCantidadPagada() {
        return cantidadPagada;
    }

    public void setCantidadPagada(long cantidadPagada) {
        this.cantidadPagada = cantidadPagada;
    }

    public String getFechaTransaccion() {
        return fechaTransaccion;
    }

    public void setFechaTransaccion(String fechaTransaccion) {
        this.fechaTransaccion = fechaTransaccion;
    }
}
