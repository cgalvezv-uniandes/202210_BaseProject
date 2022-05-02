import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import faker from '@faker-js/faker';
import { Plant } from 'src/app/classes/plant';
import { PlantsService } from 'src/app/services/plants.service';

import { PlantListComponent } from './plant-list.component';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ PlantListComponent ],
      providers: [ PlantsService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    const mockPlants = []; 
    for (let i = 0; i < 3; i++) {
      const mockPlant: Plant = {
        id: faker.datatype.number(),
        nombre_comun: faker.commerce.productName(),
        nombre_cientifico: faker.commerce.productMaterial(),
        tipo: faker.random.arrayElement(['Interior', 'Exterior']),
        altura_maxima: faker.datatype.float(),
        clima: faker.random.arrayElement(['Templado', 'Cálido', 'Frío', 'Todos']),
        sustrato_siembra: faker.commerce.productDescription()
      }
      mockPlants.push(mockPlant)
    }
    component.plants = mockPlants
    component.loading = false
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three plants register', () => {
    const plantsInTable = debug.query(By.css('tbody')).children[1]
    expect(plantsInTable.children.length - 1).toBe(3)
  });
});
