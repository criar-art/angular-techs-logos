import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotlinComponent } from './kotlin.component';

describe('KotlinComponent', () => {
  let component: KotlinComponent;
  let fixture: ComponentFixture<KotlinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotlinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
