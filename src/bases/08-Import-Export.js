// const { default: heroes } = require("./data/heroes");
import heroes, { owners } from '../data/heroes'
// import {heroes} from './data/heroes'; snipet  imp
// const { heroes } = require("./data/heroes");

console.log(owners)

console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id
    })
}
console.log(getHeroeById(2));

// filter nos sirve para sacar varios elementos cuando find nos ayuda a encontrar un elemento nadamás
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
console.log(getHeroesByOwner('DC'))