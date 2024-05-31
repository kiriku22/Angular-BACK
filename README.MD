# PazYSalvoAppClient
# -- Instalación y Configuración.
---Generar comandos npm 

    npm install
---Crear y Generar el archivo principal del proyecto de angular en su carpeta de destino

    ng new "Nombre del proyecto"
---si tenemos un error al ejecutar este paso ingresamos el sgte comando

     Set-ExecutionPolicy Unrestricted   

---en la terminal instalamos el cli de angular

    npm install -g @angular/cli

--- Generado con Angular CLI versión 17.1.0.
# -- Servidor de Desarrollo.
--- Ejecutar ng serve para un servidor de desarrollo. Navegar a http://localhost:4200/. La aplicación se recargará automáticamente si se modifican los archivos fuente.
# -- Estructura de Código.
--- Generar componentes con ng generate component component-name. También se puede usar ng generate directive|pipe|service|class|guard|interface|enum|module.


# -- Construcción.
--- Ejecutar ng build para construir el proyecto. Los archivos de construcción se almacenarán en el directorio dist/.
# -- Pruebas Unitarias.
--- Ejecutar ng test para ejecutar las pruebas unitarias a través de Karma.
# -- Pruebas End-to-End.
--- Ejecutar ng e2e para ejecutar las pruebas end-to-end a través de una plataforma de elección. Se necesita agregar un paquete que implemente capacidades de pruebas end-to-end.

# -- Instalación de Angular.
--- Creación de un nuevo proyecto con ng new NombreDelProyecto ➡️ PazYSalvoAppClient.
--- Creación del directorio Components para alojar los diferentes componentes: Side-Menu, Navbar, Login, Facturas.
--- Asegurar tener Node y el CLI de Angular instalado para generar componentes con ng g c components/NombreDelComponente.
    ejemplo

        ng g c components/facturas

--- Instalación de Angular Material.

# PazzYSalvoApp 
--Server Backend.
### -- Desarrollado con Swagger en modo Code First.
### -- Almacenamiento de la lógica y datos del backend.
### -- Documentación de la API generada automáticamente.
### -- Implementación de operaciones CRUD y lógica de negocio.
### -- Integración con el frontend PazYSalvoAppClient para el intercambio de datos y funcionalidad completa del sistema.

# JOHN ALEJANDRO MIRANDA MELGUIZO