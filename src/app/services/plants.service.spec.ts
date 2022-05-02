import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { PlantsService } from './plants.service';

describe('PlantsService', () => {
  let service: PlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(PlantsService);
  });

  it('should be create', inject([PlantsService], (service: PlantsService) => {
    expect(service).toBeTruthy();
  }));
});
