import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalComponent } from './drupal.component';

describe('DrupalComponent', () => {
  let component: DrupalComponent;
  let fixture: ComponentFixture<DrupalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrupalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
