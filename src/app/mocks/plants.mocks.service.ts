import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { delay, Observable, of } from 'rxjs';
import { Plant } from "../classes/plant";

@Injectable({
    providedIn: 'root'
})
export class MockPlantsService {

    private _mockPlants: Plant[] = []

    constructor() {
        const len = 3; //Change this value to show more registers
        for (let i = 0; i < len; i++) {
            const mockPlant: Plant = {
                id: faker.datatype.number(),
                nombre_comun: faker.commerce.productName(),
                nombre_cientifico: faker.commerce.productMaterial(),
                tipo: faker.random.arrayElement(['Interior', 'Exterior']),
                altura_maxima: faker.datatype.float(),
                clima: faker.random.arrayElement(['Templado', 'Cálido', 'Frío', 'Todos']),
                sustrato_siembra: faker.commerce.productDescription()
            }
            this._mockPlants.push(mockPlant)
        }
    }

    getPlants(): Observable<Plant[]> {
        return of(this._mockPlants).pipe(delay(1000)) //Force delay to show loading process
    }
}