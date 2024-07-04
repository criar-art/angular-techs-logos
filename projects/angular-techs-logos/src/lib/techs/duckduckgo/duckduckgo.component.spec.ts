import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckduckgoComponent } from './duckduckgo.component';

describe('DuckduckgoComponent', () => {
  let component: DuckduckgoComponent;
  let fixture: ComponentFixture<DuckduckgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckduckgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckduckgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
