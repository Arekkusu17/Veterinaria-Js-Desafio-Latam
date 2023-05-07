import { nanoid } from "nanoid";
import { readFile, writeFile } from "node:fs/promises";


const showAppointments= async ()=>{
    try {
        const data =await readAppointments();
        if (data.length>0){
            console.log("Estas son las citas agendadas:");
            console.log(data);;
        }else{
            console.log("No hay citas en la agenda 😢");
        }
    } catch (error) {
        console.log(error);
    }
};

const  newAppointment= async (pet)=>{
    const appointment={
        id:nanoid(),
        name:pet.name,
        age:pet.age,
        type:pet.type,
        color:pet.color,
        sickness:pet.sickness
    };
    const existentAppointments=await readAppointments();
    existentAppointments.push(appointment);
    await writeAppointment(existentAppointments);
    console.log("Nueva cita agregada 👍🏼");
};

const deleteAppointment=async(id)=>{
    const appointments = await readAppointments();
    const filterAppointments=appointments.filter((appointment) => appointment.id !== id);
    if (filterAppointments.length !== appointments.length){
        await writeAppointment(filterAppointments);
        console.log(`Se borro la cita de id:${id}`);
    }else{
        console.log(`No existe una cita con el id:${id}`);
    }
};

const readAppointments=async ()=>{
    try {
        return JSON.parse(await readFile('citas.json','utf-8'));
    } catch (error) {
        console.log(error);
    }
};

const writeAppointment =async (appointments)=>{
    try{
        await writeFile('citas.json',JSON.stringify(appointments));
    }catch (error){
        console.log(error);
    }
};


const cleanSchedule= async()=>{
    try{
        const appointments=readAppointments();
        if (appointments.length!==0){
            await writeFile('citas.json',JSON.stringify([]))
            console.log("Se eliminó la agenda de citas.")
        }else{
            console.log("La agenda está vacía actualmente.")
        }
    }catch(error){
        console.log(error)
    }
}



export {showAppointments, newAppointment,deleteAppointment,cleanSchedule}