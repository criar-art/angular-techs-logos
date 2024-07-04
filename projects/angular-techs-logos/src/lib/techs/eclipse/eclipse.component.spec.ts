import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseComponent } from './eclipse.component';

describe('EclipseComponent', () => {
  let component: EclipseComponent;
  let fixture: ComponentFixture<EclipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclipseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EclipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
