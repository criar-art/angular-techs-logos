import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapdragonComponent } from './snapdragon.component';

describe('SnapdragonComponent', () => {
  let component: SnapdragonComponent;
  let fixture: ComponentFixture<SnapdragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapdragonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapdragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
