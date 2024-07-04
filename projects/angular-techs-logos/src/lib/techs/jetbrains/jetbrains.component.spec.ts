import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetbrainsComponent } from './jetbrains.component';

describe('JetbrainsComponent', () => {
  let component: JetbrainsComponent;
  let fixture: ComponentFixture<JetbrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JetbrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JetbrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
