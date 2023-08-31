import { compileDeclareNgModuleFromMetadata } from "@angular/compiler";
import { Carro } from "./carro";
export const CARROS: Carro[] = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2020,
        color: 'Verde',
    },

    {
        id: 2,
        marca: 'Kia',
        modelo: 'Picanto',
        anio: 2018,
        color: 'Verde',
    },

    {
        id: 3,
        marca: 'Mercedes',
        modelo: 'Benz',
        anio: 2000,
        color: 'Azul',
    },

    {
        id: 4,
        marca: 'Mazda',
        modelo: 'CX-5',
        anio: 2015,
        color: 'Negro',
    }

]