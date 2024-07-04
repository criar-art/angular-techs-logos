import { TestBed } from '@angular/core/testing';

import { AngularTechsLogosService } from './angular-techs-logos.service';

describe('AngularTechsLogosService', () => {
  let service: AngularTechsLogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTechsLogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
