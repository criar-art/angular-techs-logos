import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestComponent } from './pinterest.component';

describe('PinterestComponent', () => {
  let component: PinterestComponent;
  let fixture: ComponentFixture<PinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
