title: Crear un API para manejar un sistema de RRHH donde puedas tener horas pagadas a empleados, cargo, salario, nomina, login...  debe contener los siguientes endpoint

postman colletion: https://.postman.co/workspace/My-Workspace~046eb3e5-fba7-47d0-8a2e-5ba539eedefc/collection/37495449-49eff890-212f-4aa1-93df-199d37ba2e12?action=share&creator=37495449
#Endpoint para empleado
• (get) /employees✅
-> obtener todos los empleados registrados

• (get) /employee/:id✅
-> obtener un empleado enviando el id

• (get) /employee/:id/hours✅
-> obtiene todas las horas trabajadas por un empleado, enviando el id

• (get) /employee/:id/salary✅
->  obtiene el salario a pagar basandose en el total de 
horas por el precio de hora del empleado

• (post) /employee✅
-> agrega un empleado nuevo

• (post) /employee/:id/hours✅
-> agrega un registro nuevo de horas usando el id del empleado para asociar las horas

• (put) /employee/:id✅
-> actualiza la informacion del empleado (solo el fullname y pricePerhours)

• (delete) /employee/:id (ojo)✅
-> borra un empleado y todo el registro de las horas trabajadas

#Endpoint para Cargo
• (get) /cargo✅
-> obtener todos los cargo  registrados

• (get) /cargo /:id✅
-> obtener un cargo enviando el id

• (get) /cargo/:id/empleado✅
-> obtiene todas los empleado enviando el id del cargo

• (post) /cargo✅
-> agrega un cargo nuevo

• (post) /cargo/:id/empleado✅
-> agrega un registro nuevo de cargo usando el id del empleado para asociarlo

• (put) /cargo  /:id✅
-> actualiza la informacion del cargo  (solo el titulo y salario)

• (delete) /cargo/:id✅
-> borra un cargo siempre y cuando no tenga empleado vinculados

Endpoint para Salarios
• (get) / salarios/cargo✅
-> obtener todos los salarios por cargo

• (post) /salarios✅
-> agrega un salario a un cargo 

• (post) /salarios✅
-> agrega un registro nuevo de salario

• (delete) / salarios✅  
-> borra un salarios  siempre y cuando no tenga cargo vinculados

#Endpoint para Ponche

• (get) /ponches✅
-> obtener todos los  ponche

• (get) /ponche/employee/:idEmployee✅
-> obtener el ponche de un empleado por id

• (get) /ponche/:id/empleado/:id✅
-> obtiene las horas x ponche 

(ojo)
• (post) /ponche/:ponche✅
-> ponchar?

#Endpoint para Account

(post) /account/login✅
(post) /account/register✅

#Endpoint para Nomina
• (get) /nomina✅
-> obtener todos las nominas

• (get) /nomina/empleado/:id✅
-> obtener las nominas del empleado enviando el id del empleado

• (get) /Nomina/:id/empleado/:id✅
-> obtiene una nomina en particular por empleado 

• (post) /nomina/:nomina✅
(ojo la db creara el id)

Guarda la nomina
•  para lograr esto crearemos varios tipos
• Employee
• WorkedHour
• Cargo
• Account
• Permiso
• Nomina
la estructura minima para cada tipo es la siguiente
• Employee:
• id: int
• cedula: string
• fullname: string
• pricePerHour: int

• WorkedHour:
• employeeId: string
• hours: int
Ponche:
• poncheId: int
• FechaEntrada: datetime
• FechaSalida: datetime
• Empleadoid: int
Cargo
//// Cargo AdminTI con byPass Activado
   Cargo:string
    isActivo: bool
    isByPass: bool

AccountRegister
• User
• Pass
• First Name
• Last Name
AccountLogin
• Token
• User
• Vigencia: datetime
• Creacion: datetime
• SID
• Permisos[]

Permiso
// Primer permiso debe ser Admin con el cargo con el isBypass

   Permiso: string
   isActivo: bool
   CargoId: int
 

Nomina

EmpleadoId
Salario
HorasTrabajadas
HorasExtras
TotalDineroHorasExtras
FechaGeneracionNomina
CorteNomina: string con el Rango de 15 dias o 1 mes ejemplo. 1 de enero 2024 - 31 Enero 2024
EmpleadoId  --->Quien Genera la nomina
TotalAPagar

nota importante

• Utilizaremos  varias listas como base de datos:employees: Employee[ ]
• workedHours: WorkedHour[ ]
• Permisos []
• Cargos[]
• Account []
• Ponche[]
• Nomina[]
en la primera se registraran los empleados con un id autogenerado
en la segunda se registraran las horas de trabajo de cada empleado, enviado el id del empleado para asociar cada registro y asi sucesivamente.

se requiere que se validen los valores enviados (id, fullname, cedula, pricePerHour)
entre las validaciones la cedula no puede estar repetida

Obligatorio usar Authentication con JWT.

Usar para las peticiones a la API con la libreria AXIOS

Usar cookies

Usar store management (unistore)

Implimentaciones de politicas CORS

Opcionales:
Redis Cache, para hacer caching system en las peticiones.

Para Node:

Persistencia

 Postgrest SQL
