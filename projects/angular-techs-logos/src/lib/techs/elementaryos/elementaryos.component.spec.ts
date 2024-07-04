import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaryosComponent } from './elementaryos.component';

describe('ElementaryosComponent', () => {
  let component: ElementaryosComponent;
  let fixture: ComponentFixture<ElementaryosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementaryosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementaryosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
