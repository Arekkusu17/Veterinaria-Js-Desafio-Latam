
# Veterinaria Js - Desafío Latam 

Making our first steps in working with Node Js
developing a small backend app that registers appointments for a veterinary.


## Deployment

To use the project, first run:

```bash
  npm install
```
To install the dependencies of the package-lock.

## Usage
This app has 4 options defined to work with:
- **registrar**: Used to add a new appointment. It needs 
- **leer**: Show all the appointments scheduled.
- **borrar**: Erase an appointment by providing its ID.
- **limpiar**: Erase the whole Schedule (re initialize the file citas.json)

If you use "**leer**" or "**limpiar**" you only need to pass said option as an argument.  
**Ex**: `node index.js leer` or `node index.js limpiar`


If you use "**borrar**" you need to pass the option and the id of the appointment (You may need too do "leer" first to know the id).  
**Ex**: `node index.js borrar <ID> `

At last, if you use "**registrar**" you will need to pass all the needed arguments or it will fail.  
**Ex**:`node index.js registrar <name> "<age in años>" <type> <color> <sickness>`

