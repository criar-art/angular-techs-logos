import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTechsLogosComponent } from './angular-techs-logos.component';

describe('AngularTechsLogosComponent', () => {
  let component: AngularTechsLogosComponent;
  let fixture: ComponentFixture<AngularTechsLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTechsLogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTechsLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
