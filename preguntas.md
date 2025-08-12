✅ 5. Análisis final (teórico)
Responder lo siguiente:

¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?

-funciones constructoras: ventajas: es compaatible con versiones antiguas de JS
                                   tiene control total sobre el objeto prototype
                        desventajas: es menos legible
                                     no se pueden ocultar los valores
class:                   ventajas: 
                        desventajas: hay menos control sobre el prototype, ya que los metodos no se crean uno por uno sino que se engloban con object.assign

¿Cuáles son las ventajas de usar getters y setters?

-getter se utiliza para obtener un valor y setters para modificar un valor, por lo que sus ventajas de usarlo es el control para acceder/modificar una propiedad, mejoran la encapsulacion y mantenimiento del codigo.

¿Qué problemas pueden surgir al modificar prototipos nativos como String?

-pueden haber problemas de sobreescritura, versiones futuras de JS, con las modificaciones que afectarian su rendimiento haciendo que funcionen mas lentass o ineficiente

Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

-la diferencia es que al asignar directamente al prototype solo se añade un metodo, en cambio al usar Object.assign se puede almacenar mas de un metodo