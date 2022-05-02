import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/classes/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Plant[] = [];
  loading: boolean = true;

  constructor(
    private _plantSrv: PlantsService
  ) { }

  ngOnInit(): void {
    this._plantSrv.getPlants()
      .subscribe({
        next: result => this.plants.push(...result),
        complete: () => this.loading = false
      })
  }

  getQtyByType(type: string) {
    return this.plants.filter(
      plant => plant.tipo.toLowerCase() === type.toLowerCase()
    ).length;
  }
}
