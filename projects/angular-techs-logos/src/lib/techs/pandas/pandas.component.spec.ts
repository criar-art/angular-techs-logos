import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasComponent } from './pandas.component';

describe('PandasComponent', () => {
  let component: PandasComponent;
  let fixture: ComponentFixture<PandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
