package mx.utez.edu.Concesionaria2.documentos;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "Vehiculos")
public class Vehiculos {
    @MongoId
    private int id;
    private String modelo;
    private String marca;
    private int anio;
    private String color;
    private long precio;
    private String tipo;


    public Vehiculos(int id, String modelo, String marca, int anio, String color, long precio, String tipo) {
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.anio = anio;
        this.color = color;
        this.precio = precio;
        this.tipo = tipo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public long getPrecio() {
        return precio;
    }

    public void setPrecio(long precio) {
        this.precio = precio;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
