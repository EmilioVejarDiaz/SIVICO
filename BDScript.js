//CLIENTES
//crear una coleccion llamada Clientes donde se inserte varios documentos con los siguientes datos:

//como crear una coleccion en mongoDB

db.createCollection("Clientes")
 // ver todas las colecciones
db.getCollectionNames()

//como insertar varios documentos en una coleccion

db.Clientes.insertMany(
[{
    "_id": 1,
    "nombre": "Juan Pérez",
    "edad": 25,
    "telefono": "555-123-4567",
    "correo": "juan.perez@example.com",
    "direccion": "Av. Siempre Viva 123",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 2,
    "nombre": "María González",
    "edad": 30,
    "telefono": "555-765-4321",
    "correo": "maria.gonzalez@example.com",
    "direccion": "Calle Falsa 123",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 3,
    "nombre": "Pedro Pérez",
    "edad": 40,
    "telefono": "555-111-2222",
    "correo": "pedro.perez@example.com",
    "direccion": "Calle Real 456",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 4,
    "nombre": "Natalia Díaz",
    "edad": 28,
    "telefono": "555-444-5555",
    "correo": "ana.lopez@example.com",
    "direccion": "Avenida del Sol 789",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 5,
    "nombre": "Jorge Hernández",
    "edad": 35,
    "telefono": "555-888-9999",
    "correo": "jorge.hernandez@example.com",
    "direccion": "Paseo de la Reforma 123",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 6,
    "nombre": "Laura Martínez",
    "edad": 27,
    "telefono": "555-777-8888",
    "correo": "laura.martinez@example.com",
    "direccion": "Callejón de los Milagros 456",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 7,
    "nombre": "Carlos Sánchez",
    "edad": 32,
    "telefono": "555-222-3333",
    "correo": "carlos.sanchez@example.com",
    "direccion": "Calle de la Luna 789",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 8,
    "nombre": "Lucía Gómez",
    "edad": 29,
    "telefono": "555-666-7777",
    "correo": "lucia.gomez@example.com",
    "direccion": "Avenida de la Paz 456",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 9,
    "nombre": "María García",
    "edad": 30,
    "telefono": "555-234-5678",
    "correo": "maria.garcia@example.com",
    "direccion": "Calle del Sol 456",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  },{
    "_id": 10,
    "nombre": "Pedro Hernández",
    "edad": 40,
    "telefono": "555-345-6789",
    "correo": "pedro.hernandez@example.com",
    "direccion": "Av. de la Luna 789",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Clientes"
  }]

)

//crear un indice donde el id sea unico

db.Clientes.createIndex({"_id":1},{unique:true})
db.Clientes.createIndex({"correo":1},{unique:true})

//EMPLEADOS


db.createCollection("Empleados")
db.Empleados.insertMany(
  [{
    "_id": 1,
    "nombre": "Higashikata Josuke",
    "telefono": "777-001-9966",
    "direccion": "Morioh Cho",
    "puesto": "empleado",
    "correo": "CrazyDiamnd@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 2,
    "nombre": "Gustavo Fring",
    "telefono": "777-002-7788",
    "direccion": "New Mexico",
    "puesto": "Gerente",
    "correo": "Gus@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 3,
    "nombre": "Juan Montes",
    "telefono": "555-123-4567",
    "direccion": "Av. Siempre Viva 123",
    "puesto": "Gerente General",
    "correo": "juan.perez@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 4,
    "nombre": "Saul Guerrero",
    "telefono": "555-555-1212",
    "direccion": "Calle Principal 456",
    "puesto": "Gerente de Ventas",
    "correo": "ana.gonzalez@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 5,
    "nombre": "Pedro Hernández",
    "telefono": "555-987-6543",
    "direccion": "Paseo de la Reforma 789",
    "puesto": "Vendedor",
    "correo": "pedro.hernandez@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 6,
    "nombre": "María Torres",
    "telefono": "555-777-8888",
    "direccion": "Av. Insurgentes Sur 456",
    "puesto": "Vendedor",
    "correo": "maria.torres@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 7,
    "nombre": "Carlos Gómez",
    "telefono": "555-444-3333",
    "direccion": "Calle de la Amargura 123",
    "puesto": "Mecánico",
    "correo": "carlos.gomez@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 8,
    "nombre": "Lucía Sánchez",
    "telefono": "555-222-1111",
    "direccion": "Paseo de la Reforma 456",
    "puesto": "Mecánico",
    "correo": "lucia.sanchez@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 9,
    "nombre": "Sofía Vargas",
    "telefono": "555-777-6666",
    "direccion": "Av. Insurgentes Norte 789",
    "puesto": "Recepcionista",
    "correo": "sofia.vargas@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  },{
    "_id": 10,
    "nombre": "Diego Martínez",
    "telefono": "555-999-0000",
    "direccion": "Av. Juárez 123",
    "puesto": "Recepcionista",
    "correo": "diego.martinez@example.com",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Empleados"
  }]

)

db.Clientes.createIndex({"nombre":1, "telefono":1})


//PROVEEDORES

db.createCollection("Proveedores")
db.Proveedores.insertMany(
  [{
    "_id": 1,
    "nombre": "Walter White",
    "direccion": "New Mexico",
    "correo": "Heisenberg@gmail.com",
    "telefono": "777-996-4411",
    "codigoPostal": 6689,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 2,
    "nombre": "Distribuidora de Refacciones Eléctricas",
    "direccion": "Calle 10 #123, Col. Centro, Ciudad de México",
    "correo": "distribuidora_electricas@example.com",
    "telefono": "555-123-4567",
    "codigoPostal": 66698,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 3,
    "nombre": "Suministros Industriales del Bajío",
    "direccion": "Av. León #456, Col. San Juan, León, Guanajuato",
    "correo": "suministros_industriales@example.com",
    "telefono": "477-123-4567",
    "codigoPostal": 37290,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 4,
    "nombre": "Comercializadora de Partes Automotrices",
    "direccion": "Calle 5 #345, Col. Lomas, Monterrey, Nuevo León",
    "correo": "comercializadora_partes@example.com",
    "telefono": "818-123-4567",
    "codigoPostal": 64611,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 5,
    "nombre": "Materiales de Construcción La Aurora",
    "direccion": "Calle 20 #567, Col. Centro, Puebla, Puebla",
    "correo": "la_aurora_materiales@example.com",
    "telefono": "222-123-4567",
    "codigoPostal": 72000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 6,
    "nombre": "Distribuidora de Hules y Plásticos",
    "direccion": "Av. Juárez #789, Col. Reforma, Querétaro, Querétaro",
    "correo": "distribuidora_hules@example.com",
    "telefono": "442-123-4567",
    "codigoPostal": 76000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 7,
    "nombre": "Distribuidora de Materiales Eléctricos del Norte",
    "direccion": "Av. Reforma #234, Col. San Francisco, Chihuahua, Chihuahua",
    "correo": "distribuidora_materiales_electricos@example.com",
    "telefono": "614-123-4567",
    "codigoPostal": 31000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 8,
    "nombre": "Importadora de Herramientas Industriales",
    "direccion": "Calle 25 #890, Col. La Paz, Guadalajara, Jalisco",
    "correo": "importadora_herramientas@example.com",
    "telefono": "333-123-4567",
    "codigoPostal": 44100,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  },{
    "_id": 9,
    "nombre": "Materiales de Empaque y Embalaje La Moderna",
    "direccion": "Av. Hidalgo #123, Col. Centro, Morelia, Michoacán",
    "correo": "la_moderna_empaque@example.com",
    "telefono": "443-123-4567",
    "codigoPostal": 58000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Proveedores"
  }]

)

db.Proveedores.createIndex({"nombre":1, "correo":1})

  db.Proveedores.aggregate([
    {
      $project: {
        nombre: 1,
        correo: 1,
        _id: 0
      }
    }
  ])
  

  //SERVICIOS
  db.createCollection("Servicios")
  db.Servicios.insertMany(

  [{
    "_id": 1,
    "nombreCliente": "Juan Pérez",
    "nombreEmpleado": "Gustavo Fring",
    "tipoServicio": "Adquisicion de un vehiculo",
    "fecha": "02/09/2002",
    "costo": 250000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 2,
    "nombreCliente": "Pedro Pérez",
    "nombreEmpleado": "Juan Montes",
    "tipoServicio": "Alineación y balanceo",
    "fecha": "2023-04-14",
    "costo": 2500,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 3,
    "nombreCliente": "Natalia Díaz",
    "nombreEmpleado": "Saul Guerrero",
    "tipoServicio": "Cambio de aceite",
    "fecha": "2023-04-13",
    "costo": 1200,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 4,
    "nombreCliente": "Natalia Díaz",
    "nombreEmpleado": "Pedro Hernández",
    "tipoServicio": "Cambio de llantas",
    "fecha": "2023-04-15",
    "costo": 6000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 5,
    "nombreCliente": "Jorge Hernández",
    "nombreEmpleado": "María Torres",
    "tipoServicio": "Mantenimiento general",
    "fecha": "2023-04-16",
    "costo": 3500,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 6,
    "nombreCliente": "Laura Martínez",
    "nombreEmpleado": "María Torres",
    "tipoServicio": "Reparación de motor",
    "fecha": "2023-04-17",
    "costo": 8000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 7,
    "nombreCliente": "Carlos Sánchez",
    "nombreEmpleado": "Carlos Gómez",
    "tipoServicio": "Cambio de amortiguadores",
    "fecha": "2023-04-18",
    "costo": 4000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 8,
    "nombreCliente": "Lucía Gómez",
    "nombreEmpleado": "Lucía Sánchez",
    "tipoServicio": "Revisión de frenos",
    "fecha": "2023-04-19",
    "costo": 1500,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 9,
    "nombreCliente": "María García",
    "nombreEmpleado": "Sofía Vargas",
    "tipoServicio": "Cambio de batería",
    "fecha": "2023-04-20",
    "costo": 2000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  },{
    "_id": 10,
    "nombreCliente": "Pedro Hernández",
    "nombreEmpleado": "Diego Martínez",
    "tipoServicio": "Cambio de filtro de aire",
    "fecha": "2023-04-21",
    "costo": 800,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Servicios"
  }]
    )

 db.Servicios.createIndex({"nombreCliente":1, "nombreEmpleado":1})


  db.Servicios.find({ costo: { $gt: 1000, $lt: 4000 } })


  //SUCURSALES
  db.createCollection("Sucursales")
  db.Sucursales.insertMany(
  [{
    "_id": 1,
    "nombre": "Concesionaria Aguascalientes",
    "direccion": "Aguascalientes",
    "telefono": "777-442-9821",
    "codigoPostal": 45997,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 2,
    "nombre": "Sucursal La Paz",
    "direccion": "Calle Independencia 123, Colonia Centro, La Paz, Baja California Sur",
    "telefono": "612-123-4567",
    "codigoPostal": 23000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 3,
    "nombre": "Sucursal Tijuana",
    "direccion": "Av. Revolución 456, Zona Centro, Tijuana, Baja California",
    "telefono": "664-987-6543",
    "codigoPostal": 22000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 4,
    "nombre": "Sucursal Mexicali",
    "direccion": "Calle Benito Juárez 789, Centro Cívico, Mexicali, Baja California",
    "telefono": "686-111-2233",
    "codigoPostal": 21000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 5,
    "nombre": "Sucursal Hermosillo",
    "direccion": "Av. Obregón 234, Zona Centro, Hermosillo, Sonora",
    "telefono": "662-555-6666",
    "codigoPostal": 83000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 6,
    "nombre": "Sucursal Culiacán",
    "direccion": "Calle Miguel Hidalgo 456, Centro, Culiacán, Sinaloa",
    "telefono": "667-444-5566",
    "codigoPostal": 80000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 7,
    "nombre": "Sucursal Guadalajara",
    "direccion": "Av. Juárez 345, Centro, Guadalajara, Jalisco",
    "telefono": "33-4444-5555",
    "codigoPostal": 44100,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 8,
    "nombre": "Sucursal Puebla",
    "direccion": "Calle Reforma 678, Centro, Puebla, Puebla",
    "telefono": "222-333-4444",
    "codigoPostal": 72000,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 9,
    "nombre": "Sucursal Veracruz",
    "direccion": "Av. Independencia 345, Centro, Veracruz, Veracruz",
    "telefono": "229-777-8888",
    "codigoPostal": 91700,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  },{
    "_id": 10,
    "nombre": "Sucursal Cancún",
    "direccion": "Av. Tulum 678, Centro, Cancún, Quintana Roo",
    "telefono": "998-111-2222",
    "codigoPostal": 77500,
    "_class": "mx.utez.edu.Concesionaria2.documentos.Sucursales"
  }]

    )

db.Sucursales.createIndex({"nombre":1, "telefono":1})


  db.Sucursales.find({}, {_id: 0, nombre: 1, telefono: 1})


  //VEHICULOS

  db.createCollection("Vehiculos")
  db.Vehiculos.insertMany(
  [{
    "_id": 1,
    "modelo": "Supra mk-4",
    "marca": "Toyota",
    "anio": 1994,
    "color": "Naranja",
    "precio": 400000,
    "tipo": "Sport",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 2,
    "modelo": "Civic",
    "marca": "Honda",
    "anio": 2020,
    "color": "Blanco",
    "precio": 350000,
    "tipo": "Coupé",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 3,
    "modelo": "Tucson",
    "marca": "Hyundai",
    "anio": 2022,
    "color": "Negro",
    "precio": 400000,
    "tipo": "SUV",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 4,
    "modelo": "Jetta",
    "marca": "Volkswagen",
    "anio": 2021,
    "color": "Gris",
    "precio": 280000,
    "tipo": "Sedán",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 5,
    "modelo": "X-Trail",
    "marca": "Nissan",
    "anio": 2022,
    "color": "Azul",
    "precio": 450000,
    "tipo": "SUV",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 6,
    "modelo": "Mazda3",
    "marca": "Mazda",
    "anio": 2021,
    "color": "Plateado",
    "precio": 320000,
    "tipo": "Hatchback",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 7,
    "modelo": "Clio",
    "marca": "Renault",
    "anio": 2020,
    "color": "Rojo",
    "precio": 200000,
    "tipo": "Sedán",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 8,
    "modelo": "Tiguan",
    "marca": "Volkswagen",
    "anio": 2022,
    "color": "Blanco",
    "precio": 460000,
    "tipo": "SUV",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 9,
    "modelo": "Kicks",
    "marca": "Nissan",
    "anio": 2021,
    "color": "Negro",
    "precio": 300000,
    "tipo": "SUV",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  },{
    "_id": 10,
    "modelo": "March",
    "marca": "Nissan",
    "anio": 2022,
    "color": "Rojo",
    "precio": 220000,
    "tipo": "Hatchback",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Vehiculos"
  }]

  )


  db.Vehiculos.createIndex({"modelo":1, "anio":1})

  db.Vehiculos.find({precio: {$gt: 200000}, anio: {$gt: 2020}})

  //VENTAS

  db.createCollection("Ventas")
  db.Ventas.insertMany(
  [{
    "_id": 1,
    "nombreCliente": "Mondongo",
    "nombreEmpleado": "Higashikata Josuke",
    "idVehiculo": 1,
    "cantidadPagada": 400000,
    "fechaTransaccion": "11/03/2022",
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  },{
    "_id": 2,
    "nombreCliente": "Joseph Joestar",
    "nombreEmpleado": "Gustavo Fring",
    "idVehiculo": 9,
    "cantidadPagada": 300000,
    "fechaTransaccion": "17/08/2020",
    "vehiculo": {
      "$ref": "Vehiculos",
      "$id": 9
    },
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  },{
    "_id": 3,
    "nombreCliente": "María González",
    "nombreEmpleado": "Juan Montes",
    "idVehiculo": 5,
    "cantidadPagada": 450000,
    "fechaTransaccion": "07/06/2022",
    "vehiculo": {
      "$ref": "Vehiculos",
      "$id": 4
    },
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  },{
    "_id": 4,
    "nombreCliente": "Pedro Pérez",
    "nombreEmpleado": "Saul Guerrero",
    "idVehiculo": 2,
    "cantidadPagada": 450000,
    "fechaTransaccion": "01/02/2022",
    "vehiculo": {
      "$ref": "Vehiculos",
      "$id": 2
    },
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  },{
    "_id": 5,
    "nombreCliente": "Pedro Pérez",
    "nombreEmpleado": "Saul Guerrero",
    "idVehiculo": 3,
    "cantidadPagada": 450000,
    "fechaTransaccion": "15/09/2022",
    "vehiculo": {
      "$ref": "Vehiculos",
      "$id": 3
    },
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  },{
    "_id": 6,
    "nombreCliente": "Pedro Pérez",
    "nombreEmpleado": "Saul Guerrero",
    "idVehiculo": 4,
    "cantidadPagada": 450000,
    "fechaTransaccion": "20/04/2022",
    "vehiculo": {
      "$ref": "Vehiculos",
      "$id": 4
    },
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  },{
    "_id": 7,
    "nombreCliente": "María García",
    "nombreEmpleado": "Sofía Vargas",
    "idVehiculo": 6,
    "cantidadPagada": 220000,
    "fechaTransaccion": "17/08/2022",
    "vehiculo": {
      "$ref": "Vehiculos",
      "$id": 6
    },
    "_class": "mx.utez.edu.Concesionaria2.documentos.Ventas"
  }]

  )

  db.Ventas.createIndex({"nombreCliente":1, "cantidadPagada":1})

  
    db.Ventas.find({cantidadPagada:{$gt:200000,$lt:400000}})


