import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackboneComponent } from './backbone.component';

describe('BackboneComponent', () => {
  let component: BackboneComponent;
  let fixture: ComponentFixture<BackboneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackboneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
