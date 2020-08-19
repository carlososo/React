//desestructuracion 
//asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = (persona) => {
    console.log(persona);
}

retornaPersona(persona)

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    // console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123,
            lng: -12.2323,
        }
    }
}

// const avengers = useContext(persona);
// console.log(avengers);

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
console.log(nombreClave, anios);

console.log(lat, lng);
// regresaPersona(persona);