import {newAppointment, showAppointments,deleteAppointment,cleanSchedule} from './operaciones.js'

const args=process.argv.slice(2)
const numArgs=args.length;

/* if (args.length >6 ){
    console.log("Sobran argumentos!");
    process.exit(0);
};

if (args.length <6 && args.length >2){
    console.log("Faltan argumentos!");
    process.exit(0);
}; */

const option =args[0]
let [id,pet]=""

switch (true){
    case numArgs==1 && (option=="leer" || option=="limpiar"):
        console.log("CARGANDO...")
        break;
    case numArgs==2 && option=="borrar":
        id=args[1]
        break;
    case args.length>6 :
        console.log("Sobran argumentos!");
        process.exit(0);
    case args.length<6 && args.length>2:
        console.log("Faltan argumentos!");
        process.exit(0);
    case args.length==6:
        pet={
            name:args[1],
            age:args[2],
            type:args[3],
            color:args[4],
            sickness:args[5]
        };
        break;
    default:
        console.log("No existe un proceso para los argumentos recibidos");
        process.exit(0)
}


(async function main() {
    switch (option) {
    case "registrar":
        await newAppointment(pet);
        break;
    case "leer":
        await showAppointments();
        break;
    case "borrar":
        await deleteAppointment(id);
        break;
    case "limpiar":
        await cleanSchedule();
        break;
    default:
        console.log("Opción desconocida");
        break;
} })();